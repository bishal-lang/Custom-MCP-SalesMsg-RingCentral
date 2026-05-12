import type { MCPTool } from "../../types/mcp.js";
import { createContact } from "../../services/ringcentral.services.js";

export const createContactTool: MCPTool = {
  name: "ringcentral_create_contact",
  description: "Create a RingCentral contact",
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