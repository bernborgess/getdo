import { TaskRepository } from "../contracts/TaskRepository";
import { checkValidTask } from "../helpers/taskValidationHelpers";
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
        const task = await this.repository.getTaskOrThrow(id);
        return task;
    }

    createTask = async (data: NewTask): Promise<Task> => {
        // Throws if invalid
        checkValidTask(data);

        const task = await this.repository.createTask(data);
        return task;
    }

    deleteTask = async (id: string) => {
        await this.repository.deleteTask(id);
    }

}

export default TaskService;