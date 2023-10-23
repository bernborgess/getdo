import { Repository } from "../contracts/Repository";
import { Task } from "../models/task";
import { prismaClient } from "./PrismaClient";

export class PrismaRepository implements Repository {
    tasks = async (): Promise<Task[]> => {
        return await prismaClient.task.findMany();
    }

    async createTask(data: { title: string; day: number; }): Promise<Task> {
        return await prismaClient.task.create({ data });
    }

}