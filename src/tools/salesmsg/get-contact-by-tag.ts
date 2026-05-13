import { getContactsByTag } from "../../services/salesmsg.services.js";
import type { MCPTool } from "../../types/mcp.js";

export const salesmsgGetContactsByTagTool: MCPTool = {
  name: "salesmsg_get_contacts_by_tag",
  description: "Get contacts by tag",
  inputSchema: {
    type: "object",
    properties: {
      tag: { type: "string" },
      page: { type: "number" },
      limit: { type: "number" },
      search: { type: "string" }
    },
    required: ["tag"],
    additionalProperties: false
  },
  handler: async (args) => {
    return getContactsByTag(args.tag, args.page, args.limit, args.search);
  }
};