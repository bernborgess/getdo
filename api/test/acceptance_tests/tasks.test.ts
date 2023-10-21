import * as request from "supertest";
import { app } from "../../src/index";

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

    afterAll(() => {
        server.close();
    })

});