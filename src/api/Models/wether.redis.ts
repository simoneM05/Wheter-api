import { createClient } from "redis";
import { API_KEY } from "../config/config";
const client = createClient();
import axios from "axios";

client
  .on("erorr", (error) => console.error("Redis client error", error))
  .connect();

export const SearchWether = async (city: string) => {
  const data = await client.hGet(`weather_${city}`, "data");
  if (data) {
    return JSON.parse(data);
  }
  // Fetch weather data from the API
  const request = await axios.get<{ current: any }>(
    `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
  );
  const weatherData = request.data;
  // Store the fetched data in Redis for 1 hour
  client.hSet(`weather_${city}`, "data", JSON.stringify(weatherData));
  client.expire(`weather_${city}`, 600);
  return weatherData;
};
