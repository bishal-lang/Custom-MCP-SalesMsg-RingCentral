import { getRingcentralClient } from "../clients/ringcentral.client.js";
import { config } from "../config/index.js";

async function request<T>(fn: () => Promise<T>, retry = true): Promise<T> {
  try {
    return await fn();
  } catch (err: any) {
    const status = err?.response?.status;
    const authError = status === 401 || status === 403;

    if (authError && retry) {
      await getRingcentralClient(); // re-init session
      return request(fn, false);
    }

    throw new Error(
      `RingCentral Error (${status ?? "no-status"}): ${
        err?.message || "unknown error"
      }`
    );
  }
}

/* ---------------- SMS ---------------- */

export async function sendSmsMms(phone: string, message: string) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const res = await platform.post(
      "/restapi/v1.0/account/~/extension/~/sms",
      {
        from: { phoneNumber: config.ringcentral.fromNumber },
        to: [{ phoneNumber: phone }],
        text: message
      }
    );

    return res.json();
  });
}

/* ---------------- CONTACTS ---------------- */

export async function createContact(first: string, last: string, phone: string) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const res = await platform.post(
      "/restapi/v1.0/account/~/extension/~/address-book/contact",
      {
        firstName: first,
        lastName: last,
        businessPhone: phone
      }
    );

    return res.json();
  });
}

export async function updateContact(contactId: string, payload: any) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const res = await platform.put(
      `/restapi/v1.0/account/~/extension/~/address-book/contact/${contactId}`,
      payload
    );

    return res.json();
  });
}

export async function getContactById(contactId: string) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const res = await platform.get(
      `/restapi/v1.0/account/~/extension/~/address-book/contact/${contactId}`
    );

    return res.json();
  });
}

export async function findContact(query: string) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const res = await platform.get(
      `/restapi/v1.0/account/~/extension/~/address-book/contact`,
      {
        searchText: query
      }
    );

    return res.json();
  });
}

/* ---------------- RINGOUT ---------------- */

export async function generateRingout(from: string, to: string) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const res = await platform.post(
      "/restapi/v1.0/account/~/extension/~/ring-out",
      {
        from: { phoneNumber: from },
        to: { phoneNumber: to },
        playPrompt: false
      }
    );

    return res.json();
  });
}

/* ---------------- FAX ---------------- */

export async function sendFax(to: string, fileUrl: string) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const res = await platform.post(
      "/restapi/v1.0/account/~/extension/~/fax",
      {
        to: [{ phoneNumber: to }],
        attachments: [{ uri: fileUrl }]
      }
    );

    return res.json();
  });
}

/* ---------------- TEAM MESSAGING ---------------- */

export async function createPost(chatId: string, text: string) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const res = await platform.post(
      `/team-messaging/v1/chats/${chatId}/posts`,
      {
        text
      }
    );

    return res.json();
  });
}

/* ---------------- VIDEO ---------------- */

export async function createVideoMeeting(accountId: string, extensionId: string, topic: string) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const res = await platform.post(
      `/rcvideo/v2/account/${accountId}/extension/${extensionId}/bridges`,
      {
        topic
      }
    );

    return res.json();
  });
}

/* ---------------- GENERIC ---------------- */

export async function apiRequest(method: string, endpoint: string, body?: any) {
  return request(async () => {
    const platform = await getRingcentralClient();

    const fn = (platform as any)[method.toLowerCase()].bind(platform);

    const res = await fn(endpoint, body);

    return res.json();
  });
}