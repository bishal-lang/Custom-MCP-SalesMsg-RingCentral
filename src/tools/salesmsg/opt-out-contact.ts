import type { MCPTool } from "../../types/mcp.js";
import { optOutContact } from "../../services/salesmsg.services.js";

export const salesmsgOptOutTool: MCPTool = {
  name: "salesmsg_opt_out",
  description: "Opt out contact",
  inputSchema: {
    type: "object",
    properties: {
      phone: { type: "string" }
    },
    required: ["phone"],
    additionalProperties: false
  },
  handler: async (args) => {
    return optOutContact(args.phone);
  }
};