import { HistoryRepository } from "../contracts/HistoryRepository";
import { History } from "../models/history";
import { prismaClient } from "./PrismaClient";

export class PrismaHistoryRepository implements HistoryRepository {
    histories = async (): Promise<History[]> => {
        return await prismaClient.history.findMany();
    }

    async createHistory(data: { title: string; finishedAt: Date; }): Promise<History> {
        return await prismaClient.history.create({ data });
    }

}