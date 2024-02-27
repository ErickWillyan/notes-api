import { Router } from "express";
import { RegisterUserController } from "./controllers/user/registerUserController.js";
import { AuthUserController } from "./controllers/user/AuthUserController.js";
import { DetailUserController } from "./controllers/user/DetailUserController.js";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import { RegisterTaskController } from "./controllers/task/ResgisterTaskController.js";
import { ConcludeTaskController } from "./controllers/task/ConcludeTaskController.js";
import { DeleteTaskController } from "./controllers/task/DeleteTaskController.js";
import { AlterTaskController } from "./controllers/task/AlterTaskController.js";
import { ListTaskController } from "./controllers/task/ListTaskController.js";

const router = Router();

//Create

router.post("/RegisterUser", RegisterUserController);

router.post("/RegisterTask", isAuthenticated, RegisterTaskController);

//Read

router.post("/AuthUser", AuthUserController);

router.get("/ListTask", isAuthenticated, ListTaskController);

router.get("/DetailUser", isAuthenticated, DetailUserController);

//Update

router.put("/ConcludeTask", isAuthenticated, ConcludeTaskController);

router.put("/AlterTask", isAuthenticated, AlterTaskController);

//Delete

router.delete("/DeleteTask", isAuthenticated, DeleteTaskController);

//

export { router };
