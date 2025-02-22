const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const response = await cityService.createCity(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created a city",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the city",
      error: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.destroyCity(req.params.id);
    return res.status(200).josn({
      data: response,
      success: true,
      message: "Successfully deleted the city",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the city",
      error: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated the city",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully able fetch the city",
      error: {},
    });
  } catch (error) {
    console.log("something went wrong in the controller layer");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      error: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
