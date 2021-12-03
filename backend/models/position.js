module.exports = (sequelize, DataTypes) => {
    let position = sequelize.define('position', {
        Position_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'Position_ID'
        },
        Position_Name: {
            type: DataTypes.STRING(50),
            field: 'Position_Name',
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
            field: 'createdAt'
        },
        

    });
    return position;
};