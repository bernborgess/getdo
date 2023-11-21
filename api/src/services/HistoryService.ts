import { HistoryRepository } from "../contracts/HistoryRepository";
import { checkValidHistory } from "../helpers/historyValidationHelpers";
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

        checkValidHistory(data);

        return await this.repository.createHistory(data);
    }

}

export default HistoryService;