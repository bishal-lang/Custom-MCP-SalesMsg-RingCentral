import type { MCPTool } from "../../types/mcp.js";
import { sendSmsMms } from "../../services/ringcentral.services.js";

export const ringcentralSendSmsTool: MCPTool = {
  name: "ringcentral_send_sms_mms",
  description: "Send SMS/MMS via RingCentral",
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
    return sendSmsMms(args.phone, args.message);
  }
};