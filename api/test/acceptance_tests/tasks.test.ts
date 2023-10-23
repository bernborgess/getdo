import * as request from "supertest";
import { app } from "../../src/index";
import { Task } from "../../src/models/task";
import { prismaClient as db } from "../../src/resources/PrismaClient";

let server;

describe("GET /tasks", () => {
    beforeAll(() => {
        server = app.listen(4000);
    })

    it("SHOULD return 200 Ok", async () => {
        await db.task.deleteMany();
        const res = await request(app).get("/tasks");
        expect(res.status).toBe(200);
    });

    it("SHOULD return a list of 2 tasks WHEN db contains 2 tasks", async () => {
        const tasks = [
            new Task("Cook rice and beans", 3),
            new Task("Take the trash out", 4)
        ];

        await db.task.deleteMany();
        await db.task.create({ data: tasks[0] })
        await db.task.create({ data: tasks[1] })

        const res = await request(app).get("/tasks");

        console.log(res.body);

        console.log(tasks);

        expect(res.body).toEqual(tasks);
    });

    afterAll(() => {
        server.close();
    })

});