const { ParkTiming } = require("../models/index");

class ParkTimingRepository {
  async createParkTiming(data) {
    try {
      const parkTiming = await ParkTiming.create({
        parkId: data.parkId,
        dayType: data.dayType,
        openingTime: data.openingTime,
        closingTime: data.closingTime,
      });
      return parkTiming;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateParkTiming(parkTimeId, data) {
    try {
      const parkTime = await ParkTiming.findByPk(parkTimeId);
      if (parkTime.parkId) parkTime.parkId = data.parkId;
      if (parkTime.dayType) parkTime.dayType = data.dayType;
      if (parkTime.openingTime) parkTime.openingTime = data.openingTime;
      if (parkTime.closingTime) parkTime.closingTime = data.closingTime;

      await parkTime.save();

      return parkTime;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteParkTiming(parkTimeId) {
    try {
      const deleteCount = await ParkTiming.destroy({
        where: {
          id: parkTimeId,
        },
      });
      if (deleteCount === 0) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }

  async getParkTiming(parkTimeId) {
    try {
      const parkTime = await ParkTiming.findOne(parkTimeId);
      return parkTime;
    } catch (error) {
      console.log("something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = ParkTimingRepository;
