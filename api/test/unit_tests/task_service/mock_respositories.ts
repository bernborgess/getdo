import { TaskRepository } from "../../../src/contracts/TaskRepository";
import { NewTask, Task } from "../../../src/models/task";

export class EmptyMockRepository implements TaskRepository {
    getTask(id: string): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    tasks = async (): Promise<Task[]> => {
        return [];
    }

    createTask = async (data: NewTask): Promise<Task> => {
        return new Task(data);
    }

    deleteTask = async (id: string): Promise<void> => {
        return;
    }
}

export class SingleMockRepository implements TaskRepository {
    getTask(id: string): Promise<Task> {
        throw new Error("Method not implemented.");
    }
    tasks = async (): Promise<Task[]> => {
        const data: NewTask = {
            day: 3,
            deadline: new Date("2023-11-02T03:24:00"),
            description: "Mind the trash lid",
            level: 2,
            title: "Get the trash out",
        }
        return [new Task(data)];
    }
    createTask = async (data: NewTask): Promise<Task> => {
        return new Task(data);
    }
    deleteTask = async (id: string): Promise<void> => {
        return;
    }

}