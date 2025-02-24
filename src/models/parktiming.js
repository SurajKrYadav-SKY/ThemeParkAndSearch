"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ParkTiming extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Park, {
        foreignKey: "parkId",
        onDelete: "CASCADE",
      });
    }
  }
  ParkTiming.init(
    {
      parkId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Parks", key: "id" },
      },
      dayType: { type: DataTypes.ENUM("weekDay", "weekEnd"), allowNull: false },
      openingTime: { type: DataTypes.TIME, allowNull: false },
      closingTime: { type: DataTypes.TIME, allowNull: false },
    },
    {
      sequelize,
      modelName: "ParkTiming",
    }
  );
  return ParkTiming;
};
