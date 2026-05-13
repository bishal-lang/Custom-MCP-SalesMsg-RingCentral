import axios from "axios";
import { config } from "../config/index.js";
import { mockSalesmsgClient } from "./mock.clients.js";

const isMock = !config.salesmsgApiKey;

export const salesmsgClient = isMock
  ? mockSalesmsgClient
  : axios.create({
      baseURL: "https://api.salesmessage.com/pub/v2.2",
      headers: {
        Authorization: `Bearer ${config.salesmsgApiKey}`,
        "Content-Type": "application/json"
      }
    });