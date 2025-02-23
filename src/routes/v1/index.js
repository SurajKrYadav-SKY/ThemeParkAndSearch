const express = require("express");
const {
  create,
  destroy,
  get,
  update,
  getAllCities,
  getParksByCity,
} = require("../../controllers/city-controller");

const router = express.Router();

router.post("/city", create);
router.delete("/city/:id", destroy);
router.get("/city/:id", get);
router.patch("/city/:id", update);
router.get("/city", getAllCities);
router.get("/park/:id", getParksByCity);

module.exports = router;
