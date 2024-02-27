import { request } from "express";
import { ListTaskService } from "../../services/task/ListTaskService.js";

const ListTaskController = async (req, res) => {
  try {
    const body = req.query.userId;
    const service = await ListTaskService(body);

    return res.status(201).json(service);
  } catch (error) {
    throw error;
  }
};

export { ListTaskController };
