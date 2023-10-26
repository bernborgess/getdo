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

    create = async (req: Request, res: Response) => {
        try {
            const task = await this.taskService.createTask(req.body);
            res.json(task);
        }
        catch (err) {
            res.status(400).send(`Something went wrong: ${err.message}`);
        }
    }

    delete = async (req: Request, res: Response) => {
        await this.taskService.deleteTask(req.params.id);
    }


}

export default new TaskController()
