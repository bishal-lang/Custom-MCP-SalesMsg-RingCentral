import type { MCPTool } from "../../types/mcp.js";
import { apiRequest } from "../../services/salesmsg.services.js";

export const salesmsgApiRequestTool: MCPTool = {
  name: "salesmsg_api_request",
  description: "Generic API request",
  inputSchema: {
    type: "object",
    properties: {
      method: { type: "string" },
      endpoint: { type: "string" },
      data: { type: "object" }
    },
    required: ["method", "endpoint"],
    additionalProperties: false
  },
  handler: async (args) => {
    return apiRequest(args.method, args.endpoint, args.data);
  }
};