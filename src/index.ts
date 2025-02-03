import e from "express";
import { router } from "./api/Routes/wether.router";
import { PORT } from "./api/config/config";

const app = e();

app.use(e.json());
app.use("/api", router);

app.listen(PORT);
