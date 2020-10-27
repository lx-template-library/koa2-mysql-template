const {sequelize, Sequelize} = require("../config");
const goods = require("./goods");
const activities = sequelize.define(
  'activity',  // 定义的表会自动加s，这里的表名为activities
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    activity_image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    online: {
      type: Sequelize.BOOLEAN,
      default: false,
      allowNull: false,
    },
    goods_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: true  // 不自动生成时间
  }
);

// 外键
activities.belongsTo(goods, {
  foreignKey: 'goods_id'
});

// 导出数据模型model
module.exports = activities;