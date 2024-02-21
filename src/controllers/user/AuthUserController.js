import { AuthUserService } from "../../services/AuthUserService.js";

const AuthUserController = async (req, res) => {
  const body = req.body;
  const response = await AuthUserService(body);

  return res.status(201).json(response);
};

export { AuthUserController };
