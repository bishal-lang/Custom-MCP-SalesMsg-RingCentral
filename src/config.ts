import dotenv from "dotenv";

dotenv.config();

export const config = {
  salesmsgApiKey:
    process.env.SALESMESSAGE_API_KEY || "",

  ringcentral: {
    clientId:
      process.env.RINGCENTRAL_CLIENT_ID || "",

    clientSecret:
      process.env.RINGCENTRAL_CLIENT_SECRET || "",

    server:
      process.env.RINGCENTRAL_SERVER_URL ||
      "https://platform.ringcentral.com",

    jwt:
      process.env.RINGCENTRAL_JWT || "",

    fromNumber:
      process.env.RINGCENTRAL_FROM_NUMBER || ""
  }
};