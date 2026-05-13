import type { MCPTool } from "../../types/mcp.js";
import { sendTextMessage } from "../../services/salesmsg.services.js";

export const salesmsgSendTextTool: MCPTool = {
  name: "salesmsg_send_text_message",
  description: "Send SMS via Salesmsg",
  inputSchema: {
    type: "object",
    properties: {
      phone: { type: "string" },
      message: { type: "string" },
      teamId: { type: "number" }
    },
    required: ["phone", "message"],
    additionalProperties: false
  },
  handler: async (args) => {
    return sendTextMessage(args.phone, args.message, args.teamId);
  }
};