import dotenv from "dotenv";

dotenv.config();

export const PORT: number = parseInt(process.env.PORT || "3000", 10);

export const API_KEY: string = process.env.API_KEY || "";
