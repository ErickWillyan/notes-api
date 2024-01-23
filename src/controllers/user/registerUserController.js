import { RegisterUserService } from "../../services/registerUserService.js";

const RegisterUserController = async (req, res) => {
  const body = req.body;
  const user = await RegisterUserService(body);

  return res.status(201).json(user);
};

export { RegisterUserController };
