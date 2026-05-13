import axios from "axios";
import { env } from "./env.js";

if (!env.salesmsg.apiKey) {
  throw new Error("Missing SALESMSG_API_KEY");
}

export const salesmsgClient = axios.create({
  baseURL: "https://api.salesmessage.com/pub/v2.2",
  headers: {
    Authorization: `Bearer ${env.salesmsg.apiKey}`,
    "Content-Type": "application/json"
  }
});