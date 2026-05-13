import { env } from "./env.js";

export const config = {
  nodeEnv: env.NODE_ENV,

  salesmsgApiKey: env.SALESMSG_API_KEY,
  ringcentral: {
    clientId: env.RINGCENTRAL_CLIENT_ID,
    clientSecret: env.RINGCENTRAL_CLIENT_SECRET,
    server: env.RINGCENTRAL_SERVER,
    jwt: env.RINGCENTRAL_JWT,
    fromNumber: env.RINGCENTRAL_FROM_NUMBER
  }
};