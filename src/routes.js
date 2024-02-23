import { Router } from "express";
import { RegisterUserController } from "./controllers/user/registerUserController.js";
import { AuthUserController } from "./controllers/user/AuthUserController.js";
import { DetailUserController } from "./controllers/user/DetailUserController.js";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import { RegisterTaskController } from "./controllers/task/ResgisterTaskController.js";
import { ConcludeTaskController } from "./controllers/task/ConcludeTaskController.js";
import { DeleteTaskController } from "./controllers/task/DeleteTaskController.js";

const router = Router();

//post
router.post("/RegisterUser", RegisterUserController);

router.post("/AuthUser", AuthUserController);

router.post("/RegisterTask", isAuthenticated, RegisterTaskController);

//get
router.get("/DetailUser", isAuthenticated, DetailUserController);

export { router };

//put
router.put("/ConcludeTask", isAuthenticated, ConcludeTaskController);

//delete

router.delete("/DeleteTask", isAuthenticated, DeleteTaskController);
