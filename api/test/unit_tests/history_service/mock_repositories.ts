import { HistoryRepository } from "../../../src/contracts/HistoryRepository";
import { History, NewHistory } from "../../../src/models/history";

export class EmptyMockHistoryRepository implements HistoryRepository {
    createHistory(data: NewHistory): Promise<History> {
        return Promise.resolve(data);
    }
    histories = async (): Promise<History[]> => {
        return [];
    }
}

export class SingleMockHistoryRepository implements HistoryRepository {
    createHistory(data: NewHistory): Promise<History> {
        throw new Error("Method not implemented.");
    }
    histories = async (): Promise<History[]> => {
        const data: NewHistory = {
            description: "Please use soap",
            finishedAt: new Date("2023-11-02T03:24:00"),
            level: 3,
            title: "Wash the shirts"
        }
        const history = new History(data);
        return [history];
    }
}