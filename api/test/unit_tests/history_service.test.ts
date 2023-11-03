import { HistoryRepository } from "../../src/contracts/HistoryRepository";
import { History } from "../../src/models/history";
import HistoryService from "../../src/services/HistoryService";

test("getHistory with no entry in db returns empty list", async () => {
    const historyService = new HistoryService(new EmptyMockHistoryRepository());
    const history = await historyService.getHistory();
    expect(history.length).toBe(0);
})

test("getHistory with one entry in db returns list of one history", async () => {
    const historyService = new HistoryService(new SingleMockHistoryRepository());
    const history = await historyService.getHistory();
    expect(history.length).toBe(1);
})

class EmptyMockHistoryRepository implements HistoryRepository {
    createHistory(data: { title: string; finishedAt: Date; }): Promise<History> {
        throw new Error("Method not implemented.");
    }
    histories = async (): Promise<History[]> => {
        return [];
    }
}

class SingleMockHistoryRepository implements HistoryRepository {
    createHistory(data: { title: string; finishedAt: Date; }): Promise<History> {
        throw new Error("Method not implemented.");
    }
    histories = async (): Promise<History[]> => {
        const history = new History("Wash the shirts", new Date("2023-11-02T03:24:00"));
        return [history];
    }
}