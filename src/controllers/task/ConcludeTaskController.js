import { ConcludeTaskService } from "../../services/task/ConcludeTaskService.js";

const ConcludeTaskController = async (req, res) => {
  const body = req.body;
  const action = await ConcludeTaskService(body);

  return res.status(201).json(action);
};

export { ConcludeTaskController };
