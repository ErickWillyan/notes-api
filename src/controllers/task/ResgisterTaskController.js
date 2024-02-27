import { RegisterTaskService } from "../../services/task/RegisterTaskService.js";

const RegisterTaskController = async (req, res) => {
  const body = req.body;
  const service = await RegisterTaskService(body);

  return res.status(201).json(service);
};

export { RegisterTaskController };
