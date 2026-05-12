import type { MCPTool } from "../../types/mcp.js";
import { updateContact } from "../../services/ringcentral.services.js";

export const updateContactTool: MCPTool = {
  name: "ringcentral_update_contact",
  description: "Update a RingCentral contact",
  inputSchema: {
    type: "object",
    properties: {
      contactId: { type: "string" },
      payload: { type: "object" }
    },
    required: ["contactId", "payload"]
  },
  handler: async (args) => {
    return updateContact(args.contactId, args.payload);
  }
};