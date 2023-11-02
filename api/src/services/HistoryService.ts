import { HistoryRepository } from "../contracts/HistoryRepository";
import { History } from "../models/history";

class HistoryService {
    private repository: HistoryRepository;

    constructor(repository: HistoryRepository) {
        this.repository = repository;
    }

    getHistory = async (): Promise<History[]> => {
        const histories = await this.repository.histories();
        return histories;
    }

    createHistory = async (data: { title: string, finishedAt: Date }): Promise<History> => {
        return await this.repository.createHistory(data);
    }

}

export default HistoryService;