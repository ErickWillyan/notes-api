import { Router } from "express";
import { RegisterUserController } from "./controllers/user/registerUserController.js";

const router = Router();

router.post("/RegisterUser", RegisterUserController);

export { router };
