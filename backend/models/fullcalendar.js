module.exports = (sequelize, DataTypes) => {
    let fullcalendar = sequelize.define('fullcalendar', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'ID'
        },
        title: {
            type: DataTypes.STRING(200),
            field: 'title'
        },
        start: {
            type: DataTypes.DATE,
            field: 'start'
        },
        end: {
            type: DataTypes.DATE,
            field: 'end'
        },
        allDay: {
            type: DataTypes.BOOLEAN,
            field: 'allDay'
        },
        visible : {
            type: DataTypes.BOOLEAN,
            defaultValue : true ,
            field: 'visible'
        }
    });
    return fullcalendar;
};