import { createClient } from "redis";
const client = createClient();

export const RedisConnect = async () => {
  client.on("erorr", (error) => console.error("Redis client error", error));
  await client.connect();
};

