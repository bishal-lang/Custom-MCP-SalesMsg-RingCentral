import type { MCPTool } from "../../types/mcp.js";
import { createContact } from "../../services/salesmsg.services.js";

export const createContactTool: MCPTool = {
  name: "salesmsg_create_contact",
  description: "Create Salesmsg contact",
  inputSchema: {
    type: "object",
    properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
      phone: { type: "string" }
    },
    required: ["firstName", "lastName", "phone"]
  },
  handler: async (args) => {
    return createContact(args.firstName, args.lastName, args.phone);
  }
};