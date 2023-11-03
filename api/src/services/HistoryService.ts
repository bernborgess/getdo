import { HistoryRepository } from "../contracts/HistoryRepository";
import { History, NewHistory } from "../models/history";

class HistoryService {
    private repository: HistoryRepository;

    constructor(repository: HistoryRepository) {
        this.repository = repository;
    }

    getHistory = async (): Promise<History[]> => {
        const histories = await this.repository.histories();
        return histories;
    }

    createHistory = async (data: NewHistory): Promise<History> => {
        if (data.title.length === 0)
            throw new Error("Task title must not be empty");

        return await this.repository.createHistory(data);
    }

}

export default HistoryService;