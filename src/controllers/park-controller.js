const { ParkService } = require("../services/index");

const parkService = new ParkService();

const createPark = async (req, res) => {
  try {
    const response = await parkService.createPark(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully create the park",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the park",
      error: error,
    });
  }
};

const getPark = async (req, res) => {
  try {
    const response = await parkService.getPark(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetch the park",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the park",
      error: error,
    });
  }
};

const getAllPark = async (req, res) => {
  try {
    const { parkName, page = 1, limit = 4 } = req.query;

    const filter = {
      parkName,
      page: parseInt(page), // Make sure page is an integer
      limit: parseInt(limit), // Make sure limit is an integer
    };

    const parks = await parkService.getAllPark(filter);
    return res.status(200).json({
      data: parks,
      success: true,
      message: "Successfully fetched all the parks",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the parks",
      error: error,
    });
  }
};

const deletePark = async (req, res) => {
  try {
    const response = await parkService.deletePark(req.params.id);
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
      message: "Not able to delete the park",
      error: error,
    });
  }
};

const updatePark = async (req, res) => {
  try {
    const response = await parkService.updatePark(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully updated the park",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer", error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the park",
      error: error,
    });
  }
};

module.exports = {
  deletePark,
  createPark,
  getPark,
  getAllPark,
  updatePark,
};
