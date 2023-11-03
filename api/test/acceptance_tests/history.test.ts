import * as request from "supertest";
import { app } from "../../src";
import { History } from "../../src/models/history";
import { prismaClient as db } from "../../src/resources/PrismaClient";

let server;

describe("GET /history", () => {
    beforeAll(async () => {
        server = app.listen(0);
    });

    it("SHOULD return 200 Ok", async () => {
        const res = await request(app).get("/history");
        expect(res.status).toBe(200);
    });

    it("SHOULD return a list of 2 histories WHEN db contains 2 histories", async () => {
        const histories = [
            new History("Cook rice and beans", new Date("2023-11-02T07:24:00")),
            new History("Take the trash out", new Date("2023-11-03T07:24:00")),
        ];

        await db.history.deleteMany();
        await db.history.create({ data: histories[0] });
        await db.history.create({ data: histories[1] });

        const res = await request(app).get("/history");

        const resHistories: History[] = res.body.map(
            hist => ({ title: hist.title, finishedAt: new Date(hist.finishedAt) })
        );

        expect(resHistories).toEqual(histories);

    })


    afterAll(() => {
        server.close();
    });

});
