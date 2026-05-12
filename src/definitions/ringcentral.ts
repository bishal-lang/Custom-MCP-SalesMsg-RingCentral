export type RingCentralSendSmsInput = {
  phone: string;
  message: string;
};

export type RingCentralCreateContactInput = {
  firstName: string;
  lastName: string;
  phone: string;
};

export type RingCentralUpdateContactInput = {
  contactId: string;
  payload: Record<string, unknown>;
};

export type RingCentralFindContactInput = {
  query: string;
};

export type RingCentralCreatePostInput = {
  text: string;
};

export type RingCentralCreateVideoMeetingInput = {
  topic: string;
};

export type RingCentralSendFaxInput = {
  to: string;
  fileUrl: string;
};

export type RingCentralApiRequestInput = {
  method: string;
  endpoint: string;
  body?: unknown;
};

/**
 * Response types (kept flexible because RingCentral is not strictly typed)
 */
export type RingCentralResponse<T = unknown> = T;