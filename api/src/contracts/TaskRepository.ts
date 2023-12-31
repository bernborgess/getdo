import { NewTask, Task } from "../models/task";

export interface TaskRepository {
    tasks(): Promise<Task[]>;
    getTaskOrThrow(id: string): Promise<Task>;
    createTask(data: NewTask): Promise<Task>;
    deleteTask(id: string): Promise<void>;
}