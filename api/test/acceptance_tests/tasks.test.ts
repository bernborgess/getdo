import * as request from "supertest";
import { app } from "../../src/index";
import { NewTask } from "../../src/models/task";
import { prismaClient as db } from "../../src/resources/PrismaClient";

let server;

function tidyTaskForExpect(dirtyTask): NewTask {
    delete dirtyTask.id;
    return {
        ...dirtyTask,
        deadline: new Date(dirtyTask.deadline)
    }
}

describe("GET /tasks", () => {
    beforeAll(async () => {
        server = app.listen(0);
    })

    it("SHOULD return 200 Ok", async () => {
        const res = await request(app).get("/tasks");
        expect(res.status).toBe(200);
    });

    it("SHOULD return a list of 2 tasks WHEN db contains 2 tasks", async () => {
        const tasks: NewTask[] = [
            {
                day: 3,
                deadline: new Date("2023-11-02T03:24:00"),
                description: "",
                level: 1,
                title: "Cook rice and beans",
            },
            {
                day: 4,
                deadline: new Date("2023-11-02T03:24:00"),
                description: "",
                level: 3,
                title: "Take the trash out",
            }
        ];

        await db.task.deleteMany();
        await db.task.create({ data: tasks[0] })
        await db.task.create({ data: tasks[1] })

        const res = await request(app).get("/tasks");
        const received = res.body.map(tidyTaskForExpect)
        expect(received).toEqual(tasks);
    });

    afterAll(() => {
        server.close();
    });

});

describe("POST /tasks", () => {
    beforeAll(async () => {
        server = app.listen(0);
    })

    it.only("SHOULD return a task after creating it", async () => {
        await db.task.deleteMany();
        const data: NewTask =
        {
            day: 3,
            deadline: new Date("2023-11-02T03:24:00"),
            description: "Some Description",
            level: 1,
            title: "Cook rice and beans",
        };

        const res = await request(app).post("/tasks").send(data);
        const received = tidyTaskForExpect(res.body);
        expect(received).toEqual(data);
    });

    it("SHOULD fail to create a task with negative days", async () => {
        const data: NewTask = {
            day: -3,
            deadline: new Date("2023-11-02T03:24:00"),
            description: "Some Description",
            level: 1,
            title: "Cook rice and beans",
        };


        const res = await request(app).post("/tasks").send(data);
        expect(res.status).toBe(400);
        expect(res.text).toBe("Something went wrong: Task day must be non-negative");
    });

    it("SHOULD fail to create a task with empty title", async () => {
        const data = {
            day: 3,
            deadline: new Date("2023-11-02T03:24:00"),
            description: "Some Description",
            level: 1,
            title: "",
        };

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
        server = app.listen(0);
    })

    it("SHOULD delete a single task", async () => {
        await db.task.deleteMany();

        // Create single task
        const data: NewTask =
        {
            day: 3,
            deadline: new Date("2023-11-02T03:24:00"),
            description: "",
            level: 1,
            title: "Cook rice and beans",
        };

        const res1 = await request(app).post("/tasks").send(data);
        expect(res1.status).toBe(200);

        const id = res1.body.id;

        // Delete the only task
        const res2 = await request(app).delete(`/tasks/${id}`);
        expect(res2.status).toBe(204);

    }, 90000);

    afterAll(() => {
        server.close();
    });
});

describe("PATCH /tasks/:id", () => {

    beforeAll(async () => {
        server = app.listen(0);
    })

    it("SHOULD mark a single task as complete", async () => {
        await db.task.deleteMany();
        await db.history.deleteMany();

        // Create single task
        const data: NewTask =
        {
            day: 3,
            deadline: new Date("2023-11-02T03:24:00"),
            description: "",
            level: 1,
            title: "Cook rice and beans",
        };
        const res1 = await request(app).post("/tasks").send(data);
        expect(res1.status).toBe(200);

        const id = res1.body.id;

        // Delete the only task
        const res2 = await request(app).patch(`/tasks/${id}`);
        expect(res2.status).toBe(200);

        // Check if history was registered
        const res3 = await request(app).get("/history");
        expect(res3.body.length).toBe(1);

    }, 90000);

    afterAll(() => {
        server.close();
    });
});


