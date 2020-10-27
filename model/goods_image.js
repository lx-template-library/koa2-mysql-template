const {sequelize, Sequelize} = require("../config");
const goods = require("./goods");

const goods_images = sequelize.define(
  'goods_image',
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    url: {
      type: Sequelize.INTEGER,
      default: 1,
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

goods_images.belongsTo(goods, {
  foreignKey: 'goods_id'
});


// 导出数据模型model
module.exports = goods_images;