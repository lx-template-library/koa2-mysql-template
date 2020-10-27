const {sequelize, Sequelize} = require("../config");
const goods = require("./goods");
const hot_goods = sequelize.define(
  'hot_goods',  // 定义的表会自动加s，这里的表名为hot_goods
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    hot_goods_image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    goods_id: {
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
hot_goods.belongsTo(goods, {
  foreignKey: 'goods_id'
});

// 导出数据模型model
module.exports = hot_goods;