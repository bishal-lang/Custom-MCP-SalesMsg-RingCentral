import type { MCPTool } from "../../types/mcp.js";
import { updateContact } from "../../services/ringcentral.services.js";

export const ringcentralUpdateContactTool: MCPTool = {
  name: "ringcentral_update_contact",
  description: "Update RingCentral contact",
  inputSchema: {
    type: "object",
    properties: {
      contactId: { type: "string" },
      payload: { type: "object" }
    },
    required: ["contactId", "payload"],
    additionalProperties: false
  },
  handler: async (args) => {
    return updateContact(args.contactId, args.payload);
  }
};