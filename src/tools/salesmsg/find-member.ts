import type { MCPTool } from "../../types/mcp.js";

export const findMemberTool: MCPTool = {
  name: "salesmsg_find_member",
  description: "Find member (placeholder - depends on Salesmsg plan)",
  inputSchema: {
    type: "object",
    properties: {
      query: { type: "string" }
    }
  },
  handler: async () => {
    return { message: "Not implemented in API wrapper yet" };
  }
};