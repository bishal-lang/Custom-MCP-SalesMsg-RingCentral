import type { MCPTool } from "../../types/mcp.js";
import { apiRequest } from "../../services/ringcentral.services.js";

export const apiRequestTool: MCPTool = {
  name: "ringcentral_api_request",
  description: "Generic RingCentral API request",
  inputSchema: {
    type: "object",
    properties: {
      method: { type: "string" },
      endpoint: { type: "string" },
      body: { type: "object" }
    },
    required: ["method", "endpoint"],
    additionalProperties: false
  },
  handler: async (args) => {
    return apiRequest(args.method, args.endpoint, args.body);
  }
};