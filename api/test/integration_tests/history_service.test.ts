
import { NewHistory } from "../../src/models/history";
import { prismaClient as db } from "../../src/resources/PrismaClient";
import { PrismaHistoryRepository } from "../../src/resources/PrismaHistoryRepository";
import HistoryService from "../../src/services/HistoryService";

test("getHistory with no entry in db returns empty list", async () => {
    await db.history.deleteMany();
    const historyService = new HistoryService(new PrismaHistoryRepository());
    const history = await historyService.getHistory();
    expect(history.length).toBe(0);
})

test("getHistory with one entry in db returns list of one history", async () => {
    await db.history.deleteMany();
    const data: NewHistory = {
        description: "Sad history",
        finishedAt: new Date("2023-11-02T03:24:00"),
        level: 3,
        title: "Get the trash out"
    }
    await db.history.create({ data });
    const historyService = new HistoryService(new PrismaHistoryRepository());
    const history = await historyService.getHistory();
    expect(history.length).toBe(1);
})

