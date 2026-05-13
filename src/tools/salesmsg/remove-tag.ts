import type { MCPTool } from "../../types/mcp.js";
import { removeTag } from "../../services/salesmsg.services.js";

export const salesmsgRemoveTagTool: MCPTool = {
  name: "salesmsg_remove_tag",
  description: "Remove tag",
  inputSchema: {
    type: "object",
    properties: {
      contactId: { type: "string" },
      tag: { type: "string" }
    },
    required: ["contactId", "tag"],
    additionalProperties: false
  },
  handler: async (args) => {
    return removeTag(args.contactId, args.tag);
  }
};