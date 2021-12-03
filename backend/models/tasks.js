module.exports = (sequelize, DataTypes) => {
    let tasks = sequelize.define('tasks', {
        tasks_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'tasksID'
        },
        tasksDetails: {
            type: DataTypes.STRING(150),
            field: 'tasksDetails'
        },
        Date: {
            type: DataTypes.DATE,

            field: 'Date'
        },
        output: {
            type: DataTypes.STRING(150),
            field: 'output'
        },
        noteAndproblem: {
            type: DataTypes.STRING(150),
            field: 'noteAndproblem'
        },
        skill: {
            type: DataTypes.STRING(150),
            field: 'skill'
        },
        visible : {
            type: DataTypes.BOOLEAN,
            defaultValue : true ,
            field: 'visible'
        },
        updatedBy : {
            type: DataTypes.INTEGER,
            field: 'updatedBy'
        },
        createBy : {
            type: DataTypes.INTEGER,
            field: 'createBy'
        },
        updatedAt : {
            type: DataTypes.DATE,
            defaultValue : DataTypes.NOW ,
            field: 'updatedAt'
        },
        createdAt : {
            type: DataTypes.DATE,
            defaultValue : DataTypes.NOW ,
            field: 'createdAt'
        },

    });
    return tasks;
};