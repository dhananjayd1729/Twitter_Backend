import express from "express";
import connect from "./config/database.js";
const app = express();

import TweetService from "./services/tweet-service.js";

const startAndPrepareServer = async () => {
  app.listen(3000, async () => {
    console.log(`Server started `);
    await connect();
    console.log("Mongo DB connected");

    // const service = new TweetService();
    // const tweet = await service.create({
    //   content: "New #TWeetstf #TES$TING #WITHCAPS",
    // });

    // console.log(tweet);
  });
};

startAndPrepareServer();
