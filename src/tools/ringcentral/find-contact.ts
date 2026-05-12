import type { MCPTool } from "../../types/mcp.js";
import { findContact } from "../../services/ringcentral.services.js";

export const findContactTool: MCPTool = {
  name: "ringcentral_find_contact",
  description: "Search RingCentral contacts",
  inputSchema: {
    type: "object",
    properties: {
      query: { type: "string" }
    },
    required: ["query"]
  },
  handler: async (args) => {
    return findContact(args.query);
  }
};