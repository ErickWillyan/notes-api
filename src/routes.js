import { Router } from "express";
import { RegisterUserController } from "./controllers/user/registerUserController.js";
import { AuthUserController } from "./controllers/user/AuthUserController.js";
import { DetailUserController } from "./controllers/user/DetailUserController.js";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";

const router = Router();

router.post("/RegisterUser", RegisterUserController);

router.post("/AuthUser", AuthUserController);

router.get("/DetailUser", isAuthenticated, DetailUserController);

export { router };
