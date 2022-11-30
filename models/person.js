const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

module.exports = {
  Person: sequelize.define('person', {
    person_id: {
      type: DataTypes.INTEGER,
      // field: 'person_id',
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email_address: {
      type: DataTypes.STRING,
      // field: 'email_address',
    },
  }),
};
