import { TaskRepository } from "../contracts/TaskRepository";
import { NewTask, Task } from "../models/task";

class TaskService {
    private repository: TaskRepository;

    constructor(repository: TaskRepository) {
        this.repository = repository;
    }

    getTasks = async (): Promise<Task[]> => {
        const tasks = await this.repository.tasks();
        return tasks;
    }

    getTask = async (id: string): Promise<Task> => {
        const task = await this.repository.getTask(id);
        return task;
    }

    createTask = async (data: NewTask): Promise<Task> => {
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