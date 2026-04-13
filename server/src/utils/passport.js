require('dotenv').config();
const pass = require('passport');
const gitStrat = require('passport-github2').Strategy;
const { User } = require('../models/Users.models.js');

pass.use(
    new gitStrat({
        clientID: process.env.GIT_CLIENT,
        clientSecret: process.env.GIT_SECRET,
        callbackURL: process.env.GIT_CALLBACK,
    },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const user = {
                    GitID: profile.id,
                    UserName: profile.username,
                    displayName: profile.displayName || profile.username,
                    UserBio: profile._json.bio,
                    UserEmail: profile._json.email || (profile.emails && profile.emails[0].value),
                    accessToken
                };
                const isExists = await User.findOne({ where: { GitID: user.GitID } })
                if (isExists) {
                    return done(null, isExists)
                } else {
                    const newUser = await User.create({
                        GitID: user.GitID,
                        FullName: user.displayName,
                        UserName: user.UserName,
                        UserBio: user.UserBio,
                        UserEmail: user.UserEmail
                    })
                    return done(null, newUser)
                }
            } catch (error) {
                return done(error, null)
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