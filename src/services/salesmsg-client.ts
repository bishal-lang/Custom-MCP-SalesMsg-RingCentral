//salesmsg-client.ts
import axios from "axios";
import { config } from "../config.js";

export const salesmsgClient = axios.create({
  baseURL:
    "https://api.salesmessage.com/pub/v2.2",

  headers: {
    Authorization: `Bearer ${config.salesmsgApiKey}`,
    "Content-Type": "application/json"
  }
});

export async function sendSalesmsgSMS(
  phone: string,
  message: string
) {
  const response =
    await salesmsgClient.post("/message", {
      phoneNumber: phone,
      message
    });

  return response.data;
}

export async function createSalesmsgContact(
  firstName: string,
  lastName: string,
  phone: string
) {
  const response =
    await salesmsgClient.post("/contacts", {
      firstName,
      lastName,
      phoneNumber: phone
    });

  return response.data;
}

export async function listSalesmsgMessages() {
  const response =
    await salesmsgClient.get("/message");

  return response.data;
}