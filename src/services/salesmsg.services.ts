import axios from "axios";
import { config } from "../config.js";

function assertConfig() {
  if (!config.salesmsgApiKey) {
    throw new Error("Missing SALESMSG API key in config");
  }
}

export const salesmsgClient = axios.create({
  baseURL: "https://api.salesmessage.com/pub/v2.2",
  headers: {
    get Authorization() {
      assertConfig();
      return `Bearer ${config.salesmsgApiKey}`;
    },
    "Content-Type": "application/json"
  }
});

/* ---------------- Messaging ---------------- */

export async function sendTextMessage(phone: string, message: string) {
  const res = await salesmsgClient.post("/messages", {
    phoneNumber: phone,
    message
  });

  return res.data;
}

export async function sendGroupText(phones: string[], message: string) {
  const res = await salesmsgClient.post("/messages/group", {
    phoneNumbers: phones,
    message
  });

  return res.data;
}

export async function sendRinglessVoicemail(phone: string, audioUrl: string) {
  const res = await salesmsgClient.post("/voicemail/ringless", {
    phoneNumber: phone,
    audioUrl
  });

  return res.data;
}

/* ---------------- Contacts ---------------- */

export async function findContact(phone: string) {
  const res = await salesmsgClient.get(
    "/contacts/search",
    {
      params: { phone }
    }
  );

  return res.data;
}

export async function createContact(
  firstName: string,
  lastName: string,
  phone: string
) {
  const res = await salesmsgClient.post("/contacts", {
    firstName,
    lastName,
    phoneNumber: phone
  });

  return res.data;
}

export async function upsertContact(
  phone: string,
  data: Record<string, unknown>
) {
  const res = await salesmsgClient.post("/contacts/upsert", {
    phoneNumber: phone,
    ...data
  });

  return res.data;
}

/* ---------------- Tags ---------------- */

export async function addTag(contactId: string, tag: string) {
  const res = await salesmsgClient.post(
    `/contacts/${contactId}/tags`,
    { tag }
  );

  return res.data;
}

export async function removeTag(contactId: string, tag: string) {
  const res = await salesmsgClient.delete(
    `/contacts/${contactId}/tags/${encodeURIComponent(tag)}`
  );

  return res.data;
}

/* ---------------- Notes ---------------- */

export async function createNote(contactId: string, note: string) {
  const res = await salesmsgClient.post(
    `/contacts/${contactId}/notes`,
    { note }
  );

  return res.data;
}

/* ---------------- Utilities ---------------- */

export async function phoneLookup(phone: string) {
  const res = await salesmsgClient.get("/lookup", {
    params: { phone }
  });

  return res.data;
}

export async function optOutContact(phone: string) {
  const res = await salesmsgClient.post("/opt-out", {
    phoneNumber: phone
  });

  return res.data;
}

/* ---------------- Generic ---------------- */

export async function apiRequest(
  method: string,
  endpoint: string,
  data?: unknown
) {
  const res = await salesmsgClient.request({
    method,
    url: endpoint,
    data
  });

  return res.data;
}