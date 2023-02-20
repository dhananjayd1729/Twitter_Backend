import express from "express";

import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { signUp, login } from "../../controllers/auth-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";

const router = express.Router();

router.post("/tweets", authenticate, createTweet);

router.post("/likes/toggle", toggleLike);
router.post("/signup", signUp);
router.get("/gettweet/:id", getTweet);

router.post("/login", login);

router.post("/comments", createComment);

export default router;
