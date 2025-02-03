import { Request, Response } from "express";
import { SearchWether } from "../Models/wether.redis";

export const cityWether = async (req: Request, res: Response) => {
  try {
    const { city } = req.query;
    if (!city) {
      res.status(400).json({ error: "City is required" });
      throw new Error();
    }
    res.status(200).json(await SearchWether(city.toString()));
  } catch (error) {
    console.log(error);
  }
};
