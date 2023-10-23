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

    async createTask(data: { title: string; day: number; }): Promise<Task> {
        const task = await this.repository.createTask(data);
        return task;
    }

}

export default TaskService;