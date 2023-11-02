import { Request, Response } from "express";
import { PrismaHistoryRepository } from "../resources/PrismaHistoryRepository";
import HistoryService from "../services/HistoryService";

class HistoryController {
    private historyService: HistoryService;

    constructor() {
        const repo = new PrismaHistoryRepository();
        this.historyService = new HistoryService(repo);
    }

    index = async (req: Request, res: Response) => {
        const histories = await this.historyService.getHistory();
        res.json(histories);
    }

}

export default new HistoryController();