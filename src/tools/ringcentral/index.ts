import { ringcentralSendSmsTool } from "./send-sms.js";
import { ringcentralCreateContactTool } from "./create-contact.js";
import { ringcentralUpdateContactTool } from "./update-contact.js";
import { ringcentralFindContactTool } from "./find-contact.js";
import { ringcentralCreatePostTool } from "./create-post.js";
import { ringcentralCreateVideoMeetingTool } from "./create-video-meeting.js";
import { ringcentralSendFaxTool } from "./send-fax.js";
import { apiRequestTool } from "./api-request.js";
import { MCPTool } from "../../types/mcp.js";
import { ringcentralRingoutTool } from "./generate-ringout.js";
import { ringcentralGetContactTool } from "./get-contact.js"


export const ringcentralTools: MCPTool[] = [
  ringcentralSendSmsTool,
  ringcentralCreateContactTool,
  ringcentralUpdateContactTool,
  ringcentralFindContactTool,
  ringcentralCreatePostTool,
  ringcentralCreateVideoMeetingTool,
  ringcentralSendFaxTool,
  // apiRequestTool,
  ringcentralRingoutTool,
  ringcentralGetContactTool
];