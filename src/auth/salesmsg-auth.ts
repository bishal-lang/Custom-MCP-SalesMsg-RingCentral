import { config } from "../config.js";

export async function getSalesmsgAccessToken() {
  if (!config.salesmsgApiKey) {
    throw new Error(
      "Missing SALESMSG_API_KEY"
    );
  }

  return config.salesmsgApiKey;
}