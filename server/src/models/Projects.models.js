const db = require('../config/db');
const { DataTypes } = require('sequelize');

const Projects = db.define('Projects', {
    PiD:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UiD:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'UserID'
        }
    },
    Pname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Pdesc:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    ReadMeCont:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    TechStack:{
        type: DataTypes.JSONB,
        allowNull: true
    },
    RepoLink:{
        type: DataTypes.STRING,
        allowNull: true
    },
    isVisible:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    LastSync:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

module.exports = Projects;