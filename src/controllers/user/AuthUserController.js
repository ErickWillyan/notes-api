import { AuthUserService } from "../../services/user/AuthUserService.js";

const AuthUserController = async (req, res) => {
  const body = req.body;
  const service = await AuthUserService(body);

  return res.status(201).json(service);
};

export { AuthUserController };
