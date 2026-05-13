import { addTagTool } from "./add-tag.js";
import { apiRequestTool } from "./api-request.js";
import { createContactTool } from "./create-contact.js";
import { createNoteTool } from "./create-note.js";
import { findContactTool } from "./find-contact.js";
import { findMemberTool } from "./find-member.js";
import { salesmsgOptOutContactTool } from "./opt-out-contact.js";
// import { salesmsgPhoneLookupTool } from "./phone-lookup.js";
import { removeTagTool } from "./remove-tag.js";
import { sendGroupTool } from "./send-group-text.js";
// import { sendRinglessVoicemailTool } from "./send-ringless-voicemail.js";
// import { upsertContactTool } from "./upsert-contact.js";
import { sendTextMessageTool } from "./send-text-message.js";
import { MCPTool } from "../../types/mcp.js";


export const salesmsgTools: MCPTool[]= [
  addTagTool,
  // apiRequestTool,
  createContactTool,
  createNoteTool,
  findContactTool,
  findMemberTool,
  salesmsgOptOutContactTool,
  // salesmsgPhoneLookupTool,
  removeTagTool,
  sendGroupTool,
  // sendRinglessVoicemailTool,
  // upsertContactTool,
  sendTextMessageTool
];