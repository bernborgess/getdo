import { History, NewHistory } from "../../../src/models/history";
import HistoryService from "../../../src/services/HistoryService";
import { EmptyMockHistoryRepository } from "./mock_repositories";


test("createHistory works with simple example", async () => {
    const historyService = new HistoryService(new EmptyMockHistoryRepository());
    const data: NewHistory = {
        description: "Please use soap",
        finishedAt: new Date("2023-11-02T03:24:00"),
        level: 3,
        title: "Wash the shirts"
    }
    const history: History = await historyService.createHistory(data);
    expect(history).toEqual(data);
})

test("Can't create a history with level below 1", async () => {
    const historyService = new HistoryService(new EmptyMockHistoryRepository());
    const data: NewHistory = {
        description: "Please use soap",
        finishedAt: new Date("2023-11-02T03:24:00"),
        level: 0,
        title: "Wash the shirts"
    }

    await expect(async () => { await historyService.createHistory(data) })
        .rejects.toThrow(new Error("History level must be between 1 and 5"));
})

