const {sequelize, Sequelize} = require("../config");

const categories = sequelize.define(
  'categories',  // 定义的表会自动加s，这里的表名为categories
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
    timestamps: true  // 自动生成时间
  }
);

// 导出数据模型model
module.exports = categories;