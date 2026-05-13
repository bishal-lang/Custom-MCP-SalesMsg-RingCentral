import { salesmsgAddTagTool } from "./add-tag.js";
import { salesmsgApiRequestTool} from "./api-request.js";
import { salesmsgCreateContactTool} from "./create-contact.js";
import { salesmsgCreateNoteTool } from "./create-note.js";
import { salesmsgFindContactsTool } from "./find-contact.js";
import { salesmsgFindMemberTool } from "./find-member.js";
import { salesmsgOptOutTool } from "./opt-out-contact.js";
import { salesmsgPhoneLookupTool} from "./phone-lookup.js";
import { salesmsgRemoveTagTool } from "./remove-tag.js";
// import { sendGroupTool } from "./send-group-text.js";
// import { sendRinglessVoicemailTool } from "./send-ringless-voicemail.js";
// import { upsertContactTool } from "./upsert-contact.js";
import { salesmsgSendTextTool } from "./send-text-message.js";
import { MCPTool } from "../../types/mcp.js";


export const salesmsgTools: MCPTool[]= [
  salesmsgAddTagTool,
  salesmsgApiRequestTool,
  salesmsgCreateContactTool,
  salesmsgCreateNoteTool,
  salesmsgFindContactsTool,
  salesmsgFindMemberTool,
  salesmsgOptOutTool,
  salesmsgPhoneLookupTool,
  salesmsgRemoveTagTool,
  // sendGroupTool,
  // sendRinglessVoicemailTool,
  // upsertContactTool,
  salesmsgSendTextTool
];