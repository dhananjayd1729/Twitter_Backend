import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(200).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully toggled a like.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      err: error,
      message: "Something went wrong",
      data: {},
    });
  }
};
