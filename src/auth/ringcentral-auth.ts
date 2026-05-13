import RingCentral from "@ringcentral/sdk";
import { config } from "../config.js";

const sdk = new RingCentral.SDK({
  clientId: config.ringcentral.clientId,
  clientSecret: config.ringcentral.clientSecret,
  server: config.ringcentral.server
});

const platform = sdk.platform();

let initialized = false;

export async function getRingCentralPlatform() {
  if (!initialized) {
    await platform.login({
      jwt: config.ringcentral.jwt
    });

    initialized = true;
  }

  return platform;
}