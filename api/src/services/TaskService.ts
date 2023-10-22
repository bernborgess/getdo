import { Repository } from "../contracts/Repository";
import { Task } from "../models/task";

class TaskService {

    private repository: Repository;

    constructor(repository: Repository) {
        this.repository = repository;
    }

    async getTasks(): Promise<Task[]> {
        const tasks = await this.repository.tasks();
        return tasks;
    }

}

export default TaskService;