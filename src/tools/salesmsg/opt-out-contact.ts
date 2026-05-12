import type { MCPTool } from "../../types/mcp.js";
import { optOutContact } from "../../services/salesmsg.services.js";

export const salesmsgOptOutContactTool: MCPTool = {
  name: "salesmsg_opt_out_contact",
  description: "Opt out a contact from messaging",
  inputSchema: {
    type: "object",
    properties: {
      phone: { type: "string" }
    },
    required: ["phone"]
  },
  handler: async (args) => {
    return optOutContact(args.phone);
  }
};