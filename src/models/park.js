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
      this.belongsTo(models.City, {
        foreignKey: "cityId",
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
    },
    {
      sequelize,
      modelName: "Park",
    }
  );
  return Park;
};
