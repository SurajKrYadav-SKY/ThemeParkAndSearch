const express = require("express");
const bodyParser = require("body-parser");
const { PORT, SYNC_DB } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const db = require("./models/index");

const setupAndStartServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //router
  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log("Server started at port:", PORT);

    if (SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
