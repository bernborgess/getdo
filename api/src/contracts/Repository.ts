import { Task } from "../models/task";

export interface Repository {
    tasks(): Promise<Task[]>;
    createTask(data: { title: string; day: number; }): Promise<Task>;
    deleteTask(id: string): Promise<void>;
}