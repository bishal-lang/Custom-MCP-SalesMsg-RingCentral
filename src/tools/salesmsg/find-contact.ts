import type { MCPTool } from "../../types/mcp.js";
import { findContact } from "../../services/salesmsg.services.js";

export const findContactTool: MCPTool = {
  name: "salesmsg_find_contact",
  description: "Find contact by phone",
  inputSchema: {
    type: "object",
    properties: {
      phone: { type: "string" }
    },
    required: ["phone"]
  },
  handler: async (args) => {
    return findContact(args.phone);
  }
};