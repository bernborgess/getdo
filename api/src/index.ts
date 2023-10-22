import * as express from "express";
import * as morgan from "morgan";
import { router } from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(router);

app.get("/tasks", (req, res) => {
    res.json({})
        .status(200);
})


export { app };
