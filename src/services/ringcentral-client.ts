import RingCentral from "@ringcentral/sdk";
import { config } from "../config.js";

const rcsdk = new RingCentral.SDK({
  clientId: config.ringcentral.clientId,
  clientSecret:
    config.ringcentral.clientSecret,
  server: config.ringcentral.server
});

const platform = rcsdk.platform();

let initialized = false;

async function initializeRingCentral() {
  if (initialized) {
    return;
  }

  await platform.login({
    jwt: config.ringcentral.jwt
  });

  initialized = true;
}

export async function sendRingCentralSMS(
  phone: string,
  message: string
) {
  await initializeRingCentral();

  const response = await platform.post(
    "/restapi/v1.0/account/~/extension/~/sms",
    {
      from: {
        phoneNumber:
          config.ringcentral.fromNumber
      },

      to: [
        {
          phoneNumber: phone
        }
      ],

      text: message
    }
  );

  return await response.json();
}

export async function getRingCentralCallLogs() {
  await initializeRingCentral();

  const response = await platform.get(
    "/restapi/v1.0/account/~/call-log"
  );

  return await response.json();
}

export async function createRingCentralContact(
  firstName: string,
  lastName: string,
  phone: string
) {
  await initializeRingCentral();

  const response = await platform.post(
    "/restapi/v1.0/account/~/extension/~/address-book/contact",
    {
      firstName,
      lastName,
      businessPhone: phone
    }
  );

  return await response.json();
}