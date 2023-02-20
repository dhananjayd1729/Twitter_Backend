import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully created a user.",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: error,
    });
  }
};
