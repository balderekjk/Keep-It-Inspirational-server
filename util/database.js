require('dotenv').config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  define: {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  },
});

module.exports = {
  sequelize,
};
