import type { MCPTool } from "../../types/mcp.js";
import { generateRingout } from "../../services/ringcentral.services.js";

export const ringcentralRingoutTool: MCPTool = {
  name: "ringcentral_generate_ringout",
  description: "Initiate ringout call",
  inputSchema: {
    type: "object",
    properties: {
      from: { type: "string" },
      to: { type: "string" }
    },
    required: ["from", "to"],
    additionalProperties: false
  },
  handler: async (args) => {
    return generateRingout(args.from, args.to);
  }
};