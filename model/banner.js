const {sequelize, Sequelize} = require("../config");
const goods = require("./goods");
const banners = sequelize.define(
  'banner',  // 定义的表会自动加s，这里的表名为banners
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    banner_image: {
      type: Sequelize.STRING,
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
banners.belongsTo(goods, {
  foreignKey: 'goods_id'
});

// 导出数据模型model
module.exports = banners;