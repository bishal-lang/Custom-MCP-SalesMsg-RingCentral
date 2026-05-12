// src/schemas/salesmsg.ts

export const salesmsgSendTextMessageSchema = {
  type: "object",
  properties: {
    phone: { type: "string" },
    message: { type: "string" }
  },
  required: ["phone", "message"],
  additionalProperties: false
} as const;

export const salesmsgSendGroupTextSchema = {
  type: "object",
  properties: {
    phones: {
      type: "array",
      items: { type: "string" }
    },
    message: { type: "string" }
  },
  required: ["phones", "message"],
  additionalProperties: false
} as const;

export const salesmsgSendRinglessVoicemailSchema = {
  type: "object",
  properties: {
    phone: { type: "string" },
    audioUrl: { type: "string" }
  },
  required: ["phone", "audioUrl"],
  additionalProperties: false
} as const;

export const salesmsgFindContactSchema = {
  type: "object",
  properties: {
    phone: { type: "string" }
  },
  required: ["phone"],
  additionalProperties: false
} as const;

export const salesmsgFindMemberSchema = {
  type: "object",
  properties: {
    email: { type: "string" },
    query: { type: "string" }
  },
  additionalProperties: false
} as const;

export const salesmsgCreateContactSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    phone: { type: "string" }
  },
  required: ["firstName", "lastName", "phone"],
  additionalProperties: false
} as const;

export const salesmsgUpsertContactSchema = {
  type: "object",
  properties: {
    phone: { type: "string" },
    data: { type: "object" }
  },
  required: ["phone"],
  additionalProperties: false
} as const;

export const salesmsgAddTagSchema = {
  type: "object",
  properties: {
    contactId: { type: "string" },
    tag: { type: "string" }
  },
  required: ["contactId", "tag"],
  additionalProperties: false
} as const;

export const salesmsgRemoveTagSchema = {
  type: "object",
  properties: {
    contactId: { type: "string" },
    tag: { type: "string" }
  },
  required: ["contactId", "tag"],
  additionalProperties: false
} as const;

export const salesmsgCreateNoteSchema = {
  type: "object",
  properties: {
    contactId: { type: "string" },
    note: { type: "string" }
  },
  required: ["contactId", "note"],
  additionalProperties: false
} as const;

export const salesmsgPhoneLookupSchema = {
  type: "object",
  properties: {
    phone: { type: "string" }
  },
  required: ["phone"],
  additionalProperties: false
} as const;

export const salesmsgOptOutContactSchema = {
  type: "object",
  properties: {
    phone: { type: "string" }
  },
  required: ["phone"],
  additionalProperties: false
} as const;

export const salesmsgApiRequestSchema = {
  type: "object",
  properties: {
    method: { type: "string" },
    endpoint: { type: "string" },
    data: { type: "object" }
  },
  required: ["method", "endpoint"],
  additionalProperties: false
} as const;