const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repository");
const Tweet = require("./models/tweet");
const Comment = require("./models/comment");

const startAndPrepareServer = async () => {
  app.listen(3000, async () => {
    console.log(`Server started `);
    await connect();
    console.log("Mongo DB connected");

    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({
    //   content: "Final Tweet",
    // });
    // console.log(tweet);
  });
};

startAndPrepareServer();
