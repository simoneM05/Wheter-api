import { Router } from "express";
import { cityWether } from "../Controller/weather.controller";
export const router = Router();

router.get("/weather", cityWether);
