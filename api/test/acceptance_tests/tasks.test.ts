import * as request from "supertest";
import { app } from "../../src/index";
import { Task } from "../../src/models/task";

let server;

describe("GET /tasks", () => {
    beforeAll(() => {
        server = app.listen(4000);
    })

    it("SHOULD return 200 Ok", done => {
        request(app)
            .get("/tasks")
            .end((err, res) => {
                expect(res.status).toBe(200);
            });
        done();
    });

    it("SHOULD return a list of 2 tasks WHEN db contains 2 tasks", async () => {
        const tasks = [
            new Task("Cook rice and beans", 3),
            new Task("Take the trash out", 4)
        ];

        await db.createTask(tasks[0]);
        await db.createTask(tasks[1]);

        const res = await request(app).get("/tasks")
        expect(res.body).toEqual(tasks);

    });

    afterAll(() => {
        server.close();
    })

});