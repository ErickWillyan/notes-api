import { RegisterTaskService } from "../../services/task/RegisterTaskService.js";

const RegisterTaskController = async (req, res) => {
  const body = req.body;
  const action = await RegisterTaskService(body);

  return res.status(201).json(action);
};

export { RegisterTaskController };
