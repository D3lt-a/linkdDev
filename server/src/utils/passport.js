require('dotenv').config();
const pass = require('passport');
const gitStrat = require('passport-github2').Strategy;
const { Users } = require('../models/Users.models.js');

pass.use(
    new gitStrat({
        clientID: process.env.GIT_CLIENT,
        clientSecret: process.env.GIT_SECRET,
        callbackURL: process.env.GIT_CALLBACK,
    },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const gitUser = {
                    GitID: String(profile.id),
                    UserName: profile.username,
                    displayName: profile.displayName || profile.username,
                    UserBio: profile._json.bio,
                    UserEmail: profile._json.email || profile.emails?.[0]?.value || null,
                };
                const isExists = await Users.findOne({ where: { GitID: gitUser.GitID } })
                if (isExists) {
                    return done(null, isExists)
                } else {
                    const newUser = await Users.create({
                        GitID: gitUser.GitID,
                        FullName: gitUser.displayName,
                        UserName: gitUser.UserName,
                        UserBio: gitUser.UserBio,
                        UserEmail: gitUser.UserEmail
                    })
                    return done(null, newUser)
                }
            } catch (error) {
                return done(error)
            }
        })
)

pass.serializeUser((user, done) => {
    done(null, user.id);
});

pass.deserializeUser(async (id, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
})

module.exports = pass;