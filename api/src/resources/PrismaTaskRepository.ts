import { TaskRepository } from "../contracts/TaskRepository";
import { NewTask, Task } from "../models/task";
import { prismaClient } from "./PrismaClient";

export class PrismaTaskRepository implements TaskRepository {
    tasks = async (): Promise<Task[]> => {
        return await prismaClient.task.findMany();
    }

    getTaskOrThrow = async (id: string): Promise<Task> => {
        return await prismaClient.task.findFirstOrThrow({ where: { id } });
    }


    createTask = async (data: NewTask): Promise<Task> => {
        return await prismaClient.task.create({ data });
    }

    deleteTask = async (id: string): Promise<void> => {
        await prismaClient.task.delete({ where: { id } });
    }

}