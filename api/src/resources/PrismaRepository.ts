import { Repository } from "../contracts/Repository";
import { Task } from "../models/task";
import { prismaClient } from "./PrismaClient";

export class PrismaRepository implements Repository {
    tasks = async (): Promise<Task[]> => {
        return await prismaClient.task.findMany();
    }

    createTask = async (data: { title: string; day: number; }): Promise<Task> => {
        return await prismaClient.task.create({ data });
    }

    deleteTask = async (id: string): Promise<void> => {
        await prismaClient.task.delete({ where: { id } });
    }

}