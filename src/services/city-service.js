const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async createMultipleCities(cities) {
    try {
      const createdCities = await this.cityRepository.createMultipleCities(
        cities
      );
      return createdCities;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async destroyCity(cityId) {
    try {
      const response = await this.cityRepository.destroyCity(cityId);
      if (response) {
        return { success: true, message: "Successfully deleted the city" };
      }
      return {
        success: false,
        message: "City not found or couldn't be deleted",
      };
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    try {
      const cities = await this.cityRepository.getAllCities({
        cityName: filter.cityName,
      });
      return cities;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getAllParks(cityId) {
    try {
      const parks = await this.cityRepository.getParksByCity(cityId);
      return parks;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
