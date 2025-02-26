"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Park, {
        foreignKey: "cityId",
      });
    }
  }
  City.init(
    {
      cityName: { type: DataTypes.STRING, allowNull: false, unique: true },
      cityState: { type: DataTypes.STRING, allowNull: false },
      cityCountry: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
