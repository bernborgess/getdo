import * as request from "supertest";
import { app } from "../../src";
import { History, NewHistory } from "../../src/models/history";
import { prismaClient as db } from "../../src/resources/PrismaClient";

let server;

function tidyHistoryForExcept(dirtyHistory): NewHistory {
    delete dirtyHistory.id;
    return {
        ...dirtyHistory,
        finishedAt: new Date(dirtyHistory.finishedAt)
    }
}

describe("GET /history", () => {
    beforeAll(async () => {
        server = app.listen(0);
    });

    it("SHOULD return 200 Ok", async () => {
        const res = await request(app).get("/history");
        expect(res.status).toBe(200);
    });

    it("SHOULD return a list of 2 histories WHEN db contains 2 histories", async () => {
        const histories: NewHistory[] = [
            {
                description: "Nice and hot",
                finishedAt: new Date("2023-11-02T07:24:00"),
                level: 3,
                title: "Cook rice and beans"
            },
            {
                description: "Take the trash out",
                finishedAt: new Date("2023-11-02T07:24:00"),
                level: 3,
                title: "Cook rice and beans"
            }
        ];

        await db.history.deleteMany();
        await db.history.create({ data: histories[0] });
        await db.history.create({ data: histories[1] });

        const res = await request(app).get("/history");

        const received: History[] = res.body.map(tidyHistoryForExcept);

        expect(received).toEqual(histories);

    })


    afterAll(() => {
        server.close();
    });

});
