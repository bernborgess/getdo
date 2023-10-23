import { Request, Response } from "express";
import { PrismaRepository } from "../resources/PrismaRepository";
import TaskService from "../services/TaskService";

class TaskController {

    private taskService: TaskService;

    constructor() {
        const repo = new PrismaRepository();
        this.taskService = new TaskService(repo);
    }

    index = async (req: Request, res: Response) => {
        const tasks = await this.taskService.getTasks();
        res.json(tasks);
    }
}

export default new TaskController()
