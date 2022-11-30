const { DataTypes } = require('sequelize');
const { sequelize } = require('../util/database');

module.exports = {
  Journal: sequelize.define('journal', {
    journal_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    person_id: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: 'person' },
        key: 'person_id',
      },
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'cascade',
    },
    art_id: {
      type: DataTypes.INTEGER,
      references: {
        model: { tableName: 'art' },
        key: 'art_id',
      },
      allowNull: false,
      onUpdate: 'cascade',
      onDelete: 'cascade',
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
