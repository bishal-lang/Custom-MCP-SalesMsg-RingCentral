import type { MCPTool } from "../../types/mcp.js";
import { sendFax } from "../../services/ringcentral.services.js";

export const ringcentralSendFaxTool: MCPTool = {
  name: "ringcentral_send_fax",
  description: "Send fax",
  inputSchema: {
    type: "object",
    properties: {
      to: { type: "string" },
      fileUrl: { type: "string" }
    },
    required: ["to", "fileUrl"],
    additionalProperties: false
  },
  handler: async (args) => {
    return sendFax(args.to, args.fileUrl);
  }
};