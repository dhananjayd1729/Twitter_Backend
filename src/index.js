const express = require("express");
const connect = require("./config/database");
const app = express();

const startAndPrepareServer = async () => {
  app.listen(3000, async () => {
    console.log(`Server started `);
    await connect();
    console.log("Mongo DB connected");
  });
};

startAndPrepareServer();
