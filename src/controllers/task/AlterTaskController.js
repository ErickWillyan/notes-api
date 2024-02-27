import { AlterTaskService } from "../../services/task/AlterTaskService.js";

const AlterTaskController = async (req, res) => {
  const body = req.body;
  const service = await AlterTaskService(body);

  return res.status(201).json(service);
};

export { AlterTaskController };
