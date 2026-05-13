import { createContact } from "../../services/salesmsg.services.js";
import type { MCPTool } from "../../types/mcp.js";

export const salesmsgCreateContactTool: MCPTool = {
  name: "salesmsg_create_contact",
  description: "Create Salesmsg contact",

  inputSchema: {
    type: "object",

    properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
      phone: { type: "string" },

      email: { type: "string" },
      integrationId: { type: "number" },
      colorIndex: { type: "number" },
      contactIntegrationId: { type: "string" },
      phoneType: { type: "string" }
    },

    required: [
      "firstName",
      "lastName",
      "phone"
    ],

    additionalProperties: false
  },

  handler: async (args) => {
    return createContact(
      args.firstName,
      args.lastName,
      args.phone,
      {
        email: args.email,
        integrationId: args.integrationId,
        colorIndex: args.colorIndex,
        contactIntegrationId:
          args.contactIntegrationId,
        phoneType: args.phoneType
      }
    );
  }
};