import express from "express";
import connect from "./config/database.js";

import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";
import Passport from "passport";
import { passportAuth } from "./config/jwt-middleware.js";

const app = express();

const startAndPrepareServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  console.log("Before passport in index.js");
  app.use(Passport.initialize());
  passportAuth(Passport);
  console.log("After passport in index.js");

  app.use("/api", apiRoutes);

  app.listen(3000, async () => {
    console.log(`Server started `);
    await connect();
    console.log("Mongo DB connected");
  });
};

startAndPrepareServer();
