'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.employee = require("./employee")( sequelize , Sequelize );
db.department = require("./department")( sequelize , Sequelize );
db.position = require("./position")( sequelize , Sequelize );
db.tasks = require("./tasks")( sequelize , Sequelize );

db.department.hasMany(
  db.employee,
  {
      foreignKey: { name: 'Department_ID', field: 'Department_ID' }, 
  }
);
db.position.hasMany(
  db.employee,
  {
      foreignKey: { name: 'Position_ID', field: 'Position_ID' }, 
  }
);
db.department.hasMany(
  db.position,
  {
      foreignKey: { name: 'Department_ID', field: 'Department_ID' }, 
  }
);
db.employee.hasMany(
  db.tasks,
  {
      foreignKey: { name: 'Employee_ID', field: 'Employee_ID' }, 
  }
);
db.employee.belongsTo(db.department, { foreignKey: 'Department_ID' });
db.employee.belongsTo(db.position, { foreignKey: 'Position_ID' });
db.position.belongsTo(db.department, { foreignKey: 'Department_ID' });
db.tasks.belongsTo(db.employee, { foreignKey: 'Employee_ID' });
module.exports = db;
