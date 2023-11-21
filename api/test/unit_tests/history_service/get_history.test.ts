import HistoryService from "../../../src/services/HistoryService";
import { EmptyMockHistoryRepository, SingleMockHistoryRepository } from "./mock_repositories";


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
