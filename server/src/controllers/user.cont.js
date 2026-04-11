const User = require('../models/Users.models.js');
const bcrypt = require('bcryptjs');

const CreateUser = async (req, res) => {
    const {gitID, fullName, userName, Bio, Email, Password} = req.body;
    const hashedPassword = await bcrypt.hash(Password, 10);
    try {
        const user = await User.create({
            GitID: gitID,
            FullName: fullName,
            UserName: userName,
            UserBio: Bio,
            UserEmail: Email,
            UserPassword: hashedPassword
        });
        res.status(201).json({message: 'User created successfully', success: true, user});
    } catch (error) {
        res.status(500).json({message: 'Error creating user', success: false, Error: error.message});
    }
}

//   "Email":"delta@mail.com",
//   "Password":"delta@password"

const VerifyUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { UserEmail: email } });
        const isPasswordValid = await bcrypt.compare(password, user.UserPassword);

        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password', success: false });
        } else {
            return res.status(200).json({ message: 'User verified successfully', success: true, user });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error verifying user', success: false, Error: error.message });
    }
}

module.exports = {
    CreateUser,
    VerifyUser
}