import { findMember } from "../../services/salesmsg.services.js";
import type { MCPTool } from "../../types/mcp.js";

export const salesmsgFindMemberTool: MCPTool = {
  name: "salesmsg_find_member",
  description: "Find team member",
  inputSchema: {
    type: "object",
    properties: {
      teamId: { type: "string" },
      term: { type: "string" },
      assigned: { type: "number" },
      limit: { type: "number" },
      offset: { type: "number" }
    },
    required: ["teamId", "term"],
    additionalProperties: false
  },
  handler: async (args) => {
    return findMember({
      teamId: args.teamId,
      term: args.term,
      assigned: args.assigned,
      limit: args.limit,
      offset: args.offset
    });
  }
};