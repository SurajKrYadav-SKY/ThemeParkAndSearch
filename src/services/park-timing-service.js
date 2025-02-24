const { ParkTimingRepository } = require("../repository/index");

class ParkTimingService {
  constructor() {
    this.parkTimingRepository = new ParkTimingRepository();
  }

  async createParkTiming(data) {
    try {
      const parkTime = await this.parkTimingRepository.createParkTiming(data);
      return parkTime;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async updateParkTiming(parkTimeId, data) {
    try {
      const parkTime = await this.parkTimingRepository.updateParkTiming(
        parkTimeId,
        data
      );
      return parkTime;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async deleteParkTiming(parkTimeId) {
    try {
      const response = await this.parkTimingRepository.deleteParkTiming(
        parkTimeId
      );
      if (response) {
        return { success: true, message: "Successfully deleted the timimg" };
      } else {
        return {
          success: false,
          message: "Timing not found or coulden't be deleted",
        };
      }
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }

  async getParkTiming(parkTimeId) {
    try {
      const parkTime = await this.parkTimingRepository.getParkTiming(
        parkTimeId
      );
      return parkTime;
    } catch (error) {
      console.log("something went wrong in the service layer");
      throw { error };
    }
  }
}

module.exports = ParkTimingService;
