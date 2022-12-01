const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

module.exports = {
  Art: sequelize.define('art', {
    art_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    person_id: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: 'person' },
        key: 'person_id',
      },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    title: {
      type: DataTypes.STRING(155),
      allowNull: false,
    },
    privacy: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    media_type: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    description: DataTypes.STRING(4100),
    media_url: DataTypes.STRING(155),
    date: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
  }),
};
