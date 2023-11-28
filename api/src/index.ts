import * as cors from "cors";
import "dotenv/config";
import * as express from "express";
import * as morgan from "morgan";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({
    credentials: true
}));
app.use(router);

export { app };
