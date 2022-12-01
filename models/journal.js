const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

module.exports = {
  Journal: sequelize.define('journal', {
    journal_id: {
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
    art_id: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: 'art' },
        key: 'art_id',
      },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    title: {
      type: DataTypes.STRING(155),
      allowNull: false,
    },
    art_title: {
      type: DataTypes.STRING(155),
      allowNull: false,
    },
    entry: {
      type: DataTypes.STRING(4100),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
  }),
};
