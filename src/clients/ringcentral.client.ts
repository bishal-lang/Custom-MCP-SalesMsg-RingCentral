import RingCentral from "@ringcentral/sdk";
import { config } from "../config/index.js";
import { mockRingcentralClient } from "./mock.clients.js";

const isMock =
  !config.ringcentral.clientId ||
  !config.ringcentral.jwt;

let sdk: any;
let platform: any;

async function initReal() {
  if (!sdk) {
    sdk = new RingCentral.SDK({
      clientId: config.ringcentral.clientId,
      clientSecret: config.ringcentral.clientSecret,
      server: config.ringcentral.server
    });

    platform = sdk.platform();

    await platform.login({
      jwt: config.ringcentral.jwt
    });
  }

  return platform;
}

export async function getRingcentralClient() {
  if (isMock) return mockRingcentralClient;
  return await initReal();
}