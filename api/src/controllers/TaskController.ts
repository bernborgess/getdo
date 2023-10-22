import { Request, Response } from "express";
import TaskService from "../services/TaskService";

class TaskController {

    private taskService: TaskService;

    constructor() {
        this.taskService = new TaskService();
    }

    async index(req: Request, res: Response) {
        const tasks = await this.taskService.getTasks();
        res.json(tasks);
    }
}

export default new TaskController()
