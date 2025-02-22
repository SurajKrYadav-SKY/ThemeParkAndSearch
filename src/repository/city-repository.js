const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity(data) {
    try {
      const city = await City.create({
        cityName: data.cityName,
        cityState: data.cityState,
        cityCountry: data.cityCountry,
      });
      return city;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }

  async destroyCity(cityId) {
    try {
      const deletedCount = await City.destroy({
        where: {
          id: cityId,
        },
      });

      if (deletedCount === 0) {
        return false;
      }
      return true;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const { cityName, page = 1, limit = 4 } = filter;

      const queryOptions = {
        limit: limit,
        offset: (page - 1) * limit, // Skip records based on current page
      };

      if (cityName) {
        queryOptions.where = {
          cityName: {
            [Op.startsWith]: cityName,
          },
        };
      }
      const cities = await City.findAll(queryOptions);
      return cities;
    } catch (error) {
      console.log("something went wrong in the repo layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
