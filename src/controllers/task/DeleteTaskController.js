import { DeleteTaskService } from "../../services/task/DeleteTaskService.js";

const DeleteTaskController = async (req, res) => {
  const body = req.body;
  const action = await DeleteTaskService(body);

  return res.status(201).json(action);
};

export { DeleteTaskController };
