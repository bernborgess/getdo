import * as express from "express";
import HistoryController from "./controllers/HistoryController";
import TaskController from "./controllers/TaskController";

const router = express.Router();

router.get("/tasks", TaskController.index);
router.post("/tasks", TaskController.create);
router.delete("/tasks/:id", TaskController.delete);
router.patch("/tasks/:id", TaskController.complete);

router.get("/history", HistoryController.index);

export { router };

