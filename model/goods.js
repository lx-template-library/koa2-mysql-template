const {sequelize, Sequelize} = require("../config");
const categories = require('./categories');
const goods = sequelize.define(
  'goods',  // 定义的表会自动加s，这里的表名为goods
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.INTEGER,
      default: 0,
      allowNull: false,
    },
    desc: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true  // 不自动生成时间
  }
);

// 外键
goods.belongsTo(categories, {
  foreignKey: 'category_id'
});

// 导出数据模型model
module.exports = goods;