import e from "express";
import { RedisConnect } from "./api/util/util";

const app = e();

app.use(e.json());
RedisConnect();

app.listen(8000);
