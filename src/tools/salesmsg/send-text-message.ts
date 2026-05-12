import type { MCPTool } from "../../types/mcp.js";
import { sendTextMessage } from "../../services/salesmsg.services.js";

export const sendTextMessageTool: MCPTool = {
  name: "salesmsg_send_text_message",
  description: "Send a single SMS message via Salesmsg",
  inputSchema: {
    type: "object",
    properties: {
      phone: { type: "string" },
      message: { type: "string" }
    },
    required: ["phone", "message"],
    additionalProperties: false
  },
  handler: async (args) => {
    return sendTextMessage(args.phone, args.message);
  }
};