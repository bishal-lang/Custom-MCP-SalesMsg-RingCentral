import type { MCPTool } from "../../types/mcp.js";
import { findContact } from "../../services/ringcentral.services.js";

export const ringcentralFindContactTool: MCPTool = {
  name: "ringcentral_find_contact",
  description: "Search contacts by query",
  inputSchema: {
    type: "object",
    properties: {
      query: { type: "string" }
    },
    required: ["query"],
    additionalProperties: false
  },
  handler: async (args) => {
    return findContact(args.query);
  }
};