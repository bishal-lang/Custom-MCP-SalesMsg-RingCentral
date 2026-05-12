export const ringcentralSendSmsSchema = {
  type: "object",
  properties: {
    phone: {
      type: "string",
      description: "Recipient phone number in E.164 format"
    },
    message: {
      type: "string",
      description: "SMS message content"
    }
  },
  required: ["phone", "message"],
  additionalProperties: false
} as const;

export const ringcentralCreateContactSchema = {
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    phone: { type: "string" }
  },
  required: ["firstName", "lastName", "phone"],
  additionalProperties: false
} as const;

export const ringcentralCreateVideoMeetingSchema = {
  type: "object",
  properties: {
    topic: { type: "string" },
    startTime: { type: "string", description: "ISO 8601 datetime" },
    duration: { type: "number", description: "Duration in minutes" }
  },
  required: ["topic", "startTime", "duration"],
  additionalProperties: false
} as const;

export const ringcentralFindContactSchema = {
  type: "object",
  properties: {
    query: { type: "string", description: "Name or phone search term" }
  },
  required: ["query"],
  additionalProperties: false
} as const;

export const ringcentralGenerateRingoutSchema = {
  type: "object",
  properties: {
    from: { type: "string" },
    to: { type: "string" }
  },
  required: ["from", "to"],
  additionalProperties: false
} as const;

export const ringcentralSendFaxSchema = {
  type: "object",
  properties: {
    to: { type: "string" },
    fileUrl: { type: "string" }
  },
  required: ["to", "fileUrl"],
  additionalProperties: false
} as const;

export const ringcentralApiRequestSchema = {
  type: "object",
  properties: {
    method: { type: "string" },
    endpoint: { type: "string" },
    data: { type: "object" }
  },
  required: ["method", "endpoint"],
  additionalProperties: false
} as const;