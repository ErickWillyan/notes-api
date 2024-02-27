import { ConcludeTaskService } from "../../services/task/ConcludeTaskService.js";

const ConcludeTaskController = async (req, res) => {
  const body = req.body;
  const service = await ConcludeTaskService(body);

  return res.status(201).json(service);
};

export { ConcludeTaskController };
