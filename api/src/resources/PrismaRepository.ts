import { Repository } from "../contracts/Repository";
import { Task } from "../models/task";
import { prismaClient } from "./PrismaClient";

export class PrismaRepository implements Repository {

    async tasks(): Promise<Task[]> {
        return await prismaClient.task.findMany();
    }
}