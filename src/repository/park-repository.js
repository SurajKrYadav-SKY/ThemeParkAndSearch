const { Op } = require("sequelize");
const { Park } = require("../models/index");

class ParkRepository {
  async createPark(data) {
    try {
      const park = await Park.create({
        parkName: data.parkName,
        address: data.address,
        parkDesc: data.parkDesc,
        cityId: data.cityId,
      });
      return park;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getPark(parkId) {
    try {
      const park = await Park.findByPk(parkId);
      return park;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllPark(filter) {
    try {
      const { parkName, page = 1, limit = 4 } = filter;

      const queryOptions = {
        limit: limit,
        offset: (page - 1) * limit, // Skip records based on current page
      };

      if (parkName) {
        queryOptions.where = {
          parkName: {
            [Op.startsWith]: parkName,
          },
        };
      }
      const parks = await Park.findAll(queryOptions);
      return parks;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async updatePark(parkId, data) {
    try {
      const park = await Park.findByPk(parkId);
      if (!park) {
        throw new Error("Park not found");
      }

      if (data.parkName) park.parkName = data.parkName;
      if (data.address) park.address = data.address;
      if (data.parkDesc) park.parkDesc = data.parkDesc;
      if (data.cityId) park.cityId = data.cityId;

      await park.save();
      return park;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async deletePark(parkId) {
    try {
      const deletedCount = await Park.destroy({
        where: {
          id: parkId,
        },
      });

      if (deletedCount === 0) {
        return false;
      }
      return true;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = ParkRepository;
