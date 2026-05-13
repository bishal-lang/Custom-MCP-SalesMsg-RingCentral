import RingCentral from "@ringcentral/sdk";
import { env } from "./env.js";

export const rcsdk = new RingCentral.SDK({
  clientId: env.ringcentral.clientId,
  clientSecret: env.ringcentral.clientSecret,
  server: env.ringcentral.server
});

export const platform = rcsdk.platform();