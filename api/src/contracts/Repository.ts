import { Task } from "../models/task";

export interface Repository {
    tasks(): Promise<Task[]>;
}