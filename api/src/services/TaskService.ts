import { Repository } from "../contracts/Repository";
import { Task } from "../models/task";

class TaskService {
    private repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    getTasks = async (): Promise<Task[]> => {
        const tasks = await this.repository.tasks();
        return tasks;
    }

    createTask = async (data: { title: string; day: number; }): Promise<Task> => {
        if (data.title.length === 0)
            throw new Error("Task title must not be empty");
        if (data.day < 0)
            throw new Error("Task day must be non-negative");
        const task = await this.repository.createTask(data);
        return task;
    }

    deleteTask = async (id: string) => {
        await this.repository.deleteTask(id);
    }

}

export default TaskService;