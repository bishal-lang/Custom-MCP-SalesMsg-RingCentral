import RingCentral from "@ringcentral/sdk";
import { config } from "../config.js";

const rcsdk = new RingCentral.SDK({
  clientId: config.ringcentral.clientId,
  clientSecret: config.ringcentral.clientSecret,
  server: config.ringcentral.server
});

const platform = rcsdk.platform();

let initialized = false;

async function init() {
  if (initialized) return;

  await platform.login({
    jwt: config.ringcentral.jwt
  });

  initialized = true;
}

/* ---------------- SMS / MMS ---------------- */

export async function sendSmsMms(
  phone: string,
  message: string
) {
  await init();

  const res = await platform.post(
    "/restapi/v1.0/account/~/extension/~/sms",
    {
      from: {
        phoneNumber: config.ringcentral.fromNumber
      },
      to: [{ phoneNumber: phone }],
      text: message
    }
  );

  return res.json();
}

/* ---------------- Contacts ---------------- */

export async function createContact(
  firstName: string,
  lastName: string,
  phone: string
) {
  await init();

  const res = await platform.post(
    "/restapi/v1.0/account/~/extension/~/address-book/contact",
    {
      firstName,
      lastName,
      businessPhone: phone
    }
  );

  return res.json();
}

export async function updateContact(
  contactId: string,
  payload: any
) {
  await init();

  const res = await platform.put(
    `/restapi/v1.0/account/~/extension/~/address-book/contact/${contactId}`,
    payload
  );

  return res.json();
}

export async function findContact(
  query: string
) {
  await init();

  const res = await platform.get(
    `/restapi/v1.0/account/~/extension/~/address-book/contact?searchText=${encodeURIComponent(query)}`
  );

  return res.json();
}

/* ---------------- Other primitives ---------------- */

export async function createPost(
  text: string
) {
  await init();

  const res = await platform.post(
    "/restapi/v1.0/glip/posts",
    { text }
  );

  return res.json();
}

export async function createVideoMeeting(
  topic: string
) {
  await init();

  const res = await platform.post(
    "/restapi/v1.0/account/~/extension/~/meeting",
    {
      topic
    }
  );

  return res.json();
}

export async function sendFax(
  to: string,
  fileUrl: string
) {
  await init();

  const res = await platform.post(
    "/restapi/v1.0/account/~/extension/~/fax",
    {
      to: [{ phoneNumber: to }],
      attachments: [{ uri: fileUrl }]
    }
  );

  return res.json();
}

/* ---------------- Generic API ---------------- */

export async function apiRequest(
  method: string,
  endpoint: string,
  body?: any
) {
  await init();

  const res = await (platform as any)[method.toLowerCase()](
    endpoint,
    body
  );

  return res.json();
}

export async function generateRingout(from: string, to: string) {
  await init();

  const res = await platform.post(
    "/restapi/v1.0/account/~/extension/~/ring-out",
    {
      from: { phoneNumber: from },
      to: { phoneNumber: to },
      playPrompt: false
    }
  );

  return res.json();
}