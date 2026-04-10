const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Users = db.define('Users', {
    UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    GitID:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    FullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UserName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    UserBio:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    IsPro:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    UserEmail:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    UserPassword:{
        type: DataTypes.STRING,
        allowNull: false
    },
    CreatedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    }
})

module.exports = Users;