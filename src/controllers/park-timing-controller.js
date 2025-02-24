const { ParkTimingService } = require("../services/index");

const parkTimingService = new ParkTimingService();

const createParkTiming = async (req, res) => {
  try {
    const response = await parkTimingService.createParkTiming(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully able to create the park time",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: error.message || "Not able to create the park timing",
      error: error,
    });
  }
};

const updateParkTiming = async (req, res) => {
  try {
    const response = await parkTimingService.updateParkTiming(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully able to update the timing",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the park timing",
      error: error,
    });
  }
};

const deleteParkTiming = async (req, res) => {
  try {
    const response = await parkTimingService.deleteParkTiming(req.params.id);
    if (response.success) {
      return res.status(200).json({
        data: {},
        success: true,
        message: response.message,
        error: {},
      });
    } else {
      return res.status(404).json({
        data: {},
        success: false,
        message: response.message,
        error: {},
      });
    }
  } catch (error) {
    console.log("something went wrong in the controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the park timing",
      error: error,
    });
  }
};

const getParkTiming = async (req, res) => {
  try {
    const response = await parkTimingService.getParkTiming(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched the timing",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the park timing",
      error: error,
    });
  }
};

module.exports = {
  createParkTiming,
  getParkTiming,
  deleteParkTiming,
  updateParkTiming,
};
