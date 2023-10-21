import * as express from "express";
import * as morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/tasks", (req, res) => {
    res.json({})
        .status(200);
})


export { app };
