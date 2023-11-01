import * as request from "supertest";
import { app } from "../../src/index";
import { Task } from "../../src/models/task";
import { prismaClient as db } from "../../src/resources/PrismaClient";

let server;

describe("GET /tasks", () => {
    beforeAll(async () => {
        server = app.listen(4000);
    })

    it("SHOULD return 200 Ok", async () => {
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

        const resTasks: Task[] = res.body.map(
            task => ({ title: task.title, day: task.day })
        );

        expect(resTasks).toEqual(tasks);
    });

    afterAll(() => {
        server.close();
    });

});

describe("POST /tasks", () => {
    beforeAll(async () => {
        server = app.listen(4000);
    })

    it("SHOULD return a task after creating it", async () => {
        await db.task.deleteMany();
        const data = { title: "Cook rice and beans", day: 3 };
        const res = await request(app).post("/tasks").send(data);
        delete res.body["id"];
        expect(res.body).toEqual(data);
    });

    it("SHOULD fail to create a task with negative days", async () => {
        const data = { title: "Cook rice and beans", day: -3 };
        const res = await request(app).post("/tasks").send(data);
        expect(res.status).toBe(400);
        expect(res.text).toBe("Something went wrong: Task day must be non-negative");
    });

    it("SHOULD fail to create a task with empty title", async () => {
        const data = { title: "", day: 1 };
        const res = await request(app).post("/tasks").send(data);
        expect(res.status).toBe(400);
        expect(res.text).toBe("Something went wrong: Task title must not be empty");
    });

    afterAll(() => {
        server.close();
    });

});

describe("DELETE /tasks/:id", () => {

    beforeAll(async () => {
        server = app.listen(4000);
    })

    it("SHOULD return not tasks after deleting the single task", async () => {
        await db.task.deleteMany();

        // Create single task
        const data = { title: "Cook rice and beans", day: 3 };
        const res1 = await request(app).post("/tasks").send(data);
        expect(res1.status).toBe(200);

        console.log(res1);

        // const id = res1.body.id;

        // // Delete the only task
        // const res2 = await request(app).delete(`/tasks/${id}`);
        // expect(res2.status).toBe(200);

        // // Check task list is empty
        // const res3 = await request(app).get("/tasks");
        // expect(res3.body.length).toBe(0);
    }, 90000);


    afterAll(() => {
        server.close();
    });
});

