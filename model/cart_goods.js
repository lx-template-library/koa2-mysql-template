const {sequelize, Sequelize} = require("../config");
const cart = require("./cart");
const goods = require("./goods");

const cart_goods = sequelize.define(
  'cart_goods',  // 定义的表会自动加s，这里的表名为users
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    amount: {
      type: Sequelize.INTEGER,
      default: 1,
      allowNull: false,
    },
    cart_id: {
      type: Sequelize.INTEGER,
      allowNull: false
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
cart_goods.belongsTo(cart, {
  foreignKey: 'cart_id'
});

cart_goods.belongsTo(goods, {
  foreignKey: 'goods_id'
});


// 导出数据模型model
module.exports = cart_goods;