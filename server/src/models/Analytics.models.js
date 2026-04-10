const db = require('../config/db');
const { DataTypes } = require('sequelize');

const Analytics = db.define('Analytics', {
    AiD:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PiD:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Projects',
            key: 'PiD'
        }
    },
    UiD:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'UserID'
        }
    },
    Views:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ViewedAt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

module.exports = Analytics