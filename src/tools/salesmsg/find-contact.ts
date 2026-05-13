import type { MCPTool } from "../../types/mcp.js";
import { findContacts } from "../../services/salesmsg.services.js";

export const salesmsgFindContactsTool: MCPTool = {
  name: "salesmsg_find_contacts",
  description: "Find contacts",
  inputSchema: {
    type: "object",
    properties: {
      phone: { type: "string" },
      firstName: { type: "string" },
      lastName: { type: "string" },
      email: { type: "string" }
    },
    additionalProperties: false
  },
  handler: async (args) => {
    return findContacts(args);
  }
};