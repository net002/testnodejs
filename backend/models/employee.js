module.exports = (sequelize, DataTypes) => {
    let employee = sequelize.define('employee', {
        Employee_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'Employee_ID'
        },
        usesName: {
            type: DataTypes.STRING(20),
            field: 'usesName',
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(50),
            field: 'password'
        },
        Employee_Fname: {
            type: DataTypes.STRING(50),
            field: 'Employee_Fname'
        },
        Employee_Lname: {
            type: DataTypes.STRING(50),
            field: 'Employee_Lname'
        },
        startDate: {
            type: DataTypes.DATE,
            defaultValue : DataTypes.NOW,
            field: 'startDate'
        },
        endDate: {
            type: DataTypes.DATE,
            defaultValue : null,
            field: 'endDate'
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
            field: 'updatedAt'
        },
        

    });
    return employee;
};