const { ParkRepository } = require("../repository/index");

class ParkService {
  constructor() {
    this.parkRepository = new ParkRepository();
  }

  async createPark(data) {
    try {
      const park = await this.parkRepository.createPark(data);
      return park;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getPark(parkId) {
    try {
      const park = await this.parkRepository.getPark(parkId);
      return park;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }
  async getAllPark(filter) {
    try {
      const parks = await this.parkRepository.getAllPark(filter);
      return parks;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async updatePark(parkId, data) {
    try {
      const park = await this.parkRepository.updatePark(parkId, data);
      return park;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async deletePark(parkId) {
    try {
      const response = await this.parkRepository.deletePark(parkId);
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
}

module.exports = ParkService;
