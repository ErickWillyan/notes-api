import { DetailUserService } from "../../services/DetailUserService.js";

const DetailUserController = async (req, res) => {
  const id = req.id;

  console.log(id);

  const response = await DetailUserService(id);

  return res.status(201).json(response);
};

export { DetailUserController };
