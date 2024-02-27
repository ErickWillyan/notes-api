import { DetailUserService } from "../../services/user/DetailUserService.js";

const DetailUserController = async (req, res) => {
  const id = req.id;
  const service = await DetailUserService(id);

  return res.status(201).json(service);
};

export { DetailUserController };
