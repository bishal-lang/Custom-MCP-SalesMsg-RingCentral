import type { MCPTool } from "../../types/mcp.js";
import { apiRequest } from "../../services/salesmsg.services.js";

export const apiRequestTool: MCPTool = {
  name: "salesmsg_api_request",
  description: "Generic Salesmsg API request",
  inputSchema: {
    type: "object",
    properties: {
      method: { type: "string" },
      endpoint: { type: "string" },
      data: { type: "object" }
    },
    required: ["method", "endpoint"]
  },
  handler: async (args) => {
    return apiRequest(args.method, args.endpoint, args.data);
  }
};