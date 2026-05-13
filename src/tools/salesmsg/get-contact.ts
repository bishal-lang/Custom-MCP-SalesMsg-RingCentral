import type { MCPTool } from "../../types/mcp.js";
import { getContact } from "../../services/salesmsg.services.js";

export const salesmsgGetContactTool: MCPTool = {
  name: "salesmsg_get_contact",
  description: "Get contact by ID",
  inputSchema: {
    type: "object",
    properties: {
      contactId: { type: "string" }
    },
    required: ["contactId"],
    additionalProperties: false
  },
  handler: async (args) => {
    return getContact(args.contactId);
  }
};