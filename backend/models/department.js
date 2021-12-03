module.exports = (sequelize, DataTypes) => {
    let department = sequelize.define('department', {
        Department_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'Department_ID'
        },
        Department_Name: {
            type: DataTypes.STRING(50),
            field: 'Department_Name',
            allowNull: false
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
    return department;
};