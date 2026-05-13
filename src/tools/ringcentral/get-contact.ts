import type { MCPTool } from "../../types/mcp.js";
import { getContactById } from "../../services/ringcentral.services.js";

export const ringcentralGetContactTool: MCPTool = {
  name: "ringcentral_get_contact",
  description: "Get RingCentral contact by ID",
  inputSchema: {
    type: "object",
    properties: {
      contactId: { type: "string" }
    },
    required: ["contactId"],
    additionalProperties: false
  },
  handler: async (args) => {
    return getContactById(args.contactId);
  }
};