

export type SalesmsgSendTextInput = {
  phone: string;
  message: string;
};

export type SalesmsgSendGroupTextInput = {
  phones: string[];
  message: string;
};

export type SalesmsgSendRinglessVoicemailInput = {
  phone: string;
  audioUrl: string;
};

export type SalesmsgFindContactInput = {
  phone: string;
};

export type SalesmsgFindMemberInput = {
  query?: string;
  email?: string;
};

export type SalesmsgCreateContactInput = {
  firstName: string;
  lastName: string;
  phone: string;
};

export type SalesmsgUpsertContactInput = {
  phone: string;
  data: Record<string, unknown>;
};

export type SalesmsgAddTagInput = {
  contactId: string;
  tag: string;
};

export type SalesmsgRemoveTagInput = {
  contactId: string;
  tag: string;
};

export type SalesmsgCreateNoteInput = {
  contactId: string;
  note: string;
};

export type SalesmsgPhoneLookupInput = {
  phone: string;
};

export type SalesmsgOptOutInput = {
  phone: string;
};

export type SalesmsgApiRequestInput = {
  method: string;
  endpoint: string;
  data?: unknown;
};

/**
 * Generic response type (Salesmsg is JSON-first API)
 */
export type SalesmsgResponse<T = unknown> = T;