import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
  try {
    const response = await commentService.create(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content
    );
    res.status(201).json({
      data: response,
      message: "Successfully created a comment",
      success: true,
      err: {},
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      message: "Something went wrong",
      success: false,
      err: error,
    });
  }
};
