import type { MCPTool } from "../../types/mcp.js";
import { findContacts } from "../../services/salesmsg.services.js";

export const findContactTool: MCPTool = {
  name: "salesmsg_find_contact",
  description: "Find contact by phone",
  inputSchema: {
    type: "object",
    properties: {
      phone: { type: "string" }
    },
    required: ["phone"],
    additionalProperties: false
  },
  handler: async (args) => {
    return findContacts(args.phone);
  }
};