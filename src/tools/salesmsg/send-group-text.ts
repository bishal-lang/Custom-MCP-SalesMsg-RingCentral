import type { MCPTool } from "../../types/mcp.js";
import { sendGroupText } from "../../services/salesmsg.services.js";

export const sendGroupTool: MCPTool = {
  name: "salesmsg_send_group_text",
  description: "Send group SMS",
  inputSchema: {
    type: "object",
    properties: {
      phones: { type: "array", items: { type: "string" } },
      message: { type: "string" }
    },
    required: ["phones", "message"],
    additionalProperties: false
  },
  handler: async (args) => {
    return sendGroupText(args.phones, args.message);
  }
};