const {sequelize, Sequelize} = require("../config");
const orders = require("./order");
const goods = require("./goods");

const order_goods = sequelize.define(
  'order_goods',  // 定义的表会自动加s，这里的表名为users
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
    order_id: {
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
order_goods.belongsTo(orders, {
  foreignKey: 'order_id'
});

order_goods.belongsTo(goods, {
  foreignKey: 'goods_id'
});


// 导出数据模型model
module.exports = order_goods;