const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  SYNC_DB: process.env.SYNC_DB,
};
