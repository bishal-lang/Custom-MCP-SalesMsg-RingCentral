import type { MCPTool } from "../../types/mcp.js";
import { sendRinglessVoicemail } from "../../services/salesmsg.services.js";

export const sendRinglessVoicemailTool: MCPTool = {
  name: "salesmsg_send_ringless_voicemail",
  description: "Send ringless voicemail",
  inputSchema: {
    type: "object",
    properties: {
      phone: { type: "string" },
      audioUrl: { type: "string" }
    },
    required: ["phone", "audioUrl"],
    additionalProperties: false
  },
  handler: async (args) => {
    return sendRinglessVoicemail(args.phone, args.audioUrl);
  }
};