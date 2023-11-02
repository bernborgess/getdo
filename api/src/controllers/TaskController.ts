import { Request, Response } from "express";
import { prismaClient } from "../resources/PrismaClient";
import { PrismaHistoryRepository } from "../resources/PrismaHistoryRepository";
import { PrismaTaskRepository } from "../resources/PrismaTaskRepository";
import HistoryService from "../services/HistoryService";
import TaskService from "../services/TaskService";

class TaskController {
    private taskService: TaskService;
    private historyService: HistoryService;

    constructor() {
        const taskRepo = new PrismaTaskRepository();
        this.taskService = new TaskService(taskRepo);
        const historyRepo = new PrismaHistoryRepository();
        this.historyService = new HistoryService(historyRepo);
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
        res.status(204).json({});
    }

    complete = async (req: Request, res: Response) => {

        const oldTask = await prismaClient.task.findFirst({
            where: { id: req.params.id }
        });

        await this.historyService.createHistory({
            title: oldTask.title,
            finishedAt: new Date()
        });

        await this.taskService.deleteTask(req.params.id);

        res.status(200).json({});
    }

}

export default new TaskController();
