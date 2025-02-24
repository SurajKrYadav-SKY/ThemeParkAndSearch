const express = require("express");
const {
  create,
  destroy,
  get,
  update,
  getAllCities,
  getParksByCity,
} = require("../../controllers/city-controller");

const {
  deletePark,
  createPark,
  getPark,
  getAllPark,
  updatePark,
} = require("../../controllers/park-controller");

const {
  createParkTiming,
  updateParkTiming,
  deleteParkTiming,
  getParkTiming,
} = require("../../controllers/park-timing-controller");

const router = express.Router();

//city

router.post("/city", create);
router.delete("/city/:id", destroy);
router.get("/city/:id", get);
router.patch("/city/:id", update);
router.get("/city", getAllCities);
router.get("/parks/:id", getParksByCity);

//park

router.post("/park", createPark);
router.get("/park/:id", getPark);
router.get("/park", getAllPark);
router.patch("/park/:id", updatePark);
router.delete("/park/:id", deletePark);

//park-timings

router.post("/park-timing", createParkTiming);
router.get("/park-timing/:id", getParkTiming);
router.patch("/park-timing/:id", updateParkTiming);
router.delete("/park-timing/:id", deleteParkTiming);

module.exports = router;
