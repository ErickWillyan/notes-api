import { DeleteTaskService } from "../../services/task/DeleteTaskService.js";

const DeleteTaskController = async (req, res) => {
  const body = req.query.taskId;
  const service = await DeleteTaskService(body);

  return res.status(201).json(service);
};

export { DeleteTaskController };
