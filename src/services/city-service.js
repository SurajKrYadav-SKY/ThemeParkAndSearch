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

  async destroyCity(cityId) {
    try {
      const response = await this.cityRepository.destroyCity(cityId);
      return response;
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
}

module.exports = CityService;
