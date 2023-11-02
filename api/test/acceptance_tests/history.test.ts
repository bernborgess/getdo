import * as request from "supertest";
import { app } from "../../src";

let server;

describe("GET /history", () => {
    beforeAll(async () => {
        server = app.listen(4000);
    });

    it("SHOULD return 200 Ok", async () => {
        const res = await request(app).get("/history");
        expect(res.status).toBe(200);
    });


    afterAll(() => {
        server.close();
    });

});