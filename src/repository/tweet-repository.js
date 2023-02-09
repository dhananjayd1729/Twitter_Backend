import Tweet from "../models/tweet.js";

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async get(Id) {
    try {
      const tweet = await Tweet.findById(Id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async destroy(tweetId) {
    try {
      const tweet = await Tweet.findByIdAndRemove(tweetId);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getWithComments(tweetId) {
    try {
      const tweet = await Tweet.findById(tweetId)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;
