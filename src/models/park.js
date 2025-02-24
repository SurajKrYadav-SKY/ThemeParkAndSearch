"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Park extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // a park belongs to a city
      this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "CASCADE",
      });

      // a park has many park timings
      this.hasMany(models.ParkTiming, {
        foreignKey: "parkId",
        onDelete: "CASCADE",
      });
    }
  }
  Park.init(
    {
      parkName: { type: DataTypes.STRING, allowNull: false },
      address: DataTypes.STRING,
      parkDesc: DataTypes.STRING,
      cityId: { type: DataTypes.INTEGER, allowNull: false },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 240,
      },
    },
    {
      sequelize,
      modelName: "Park",
    }
  );
  return Park;
};
