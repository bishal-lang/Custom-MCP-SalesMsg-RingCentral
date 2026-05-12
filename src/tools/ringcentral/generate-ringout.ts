import type { MCPTool } from "../../types/mcp.js";
import { generateRingout } from "../../services/ringcentral.services.js";

export const generateRingoutTool: MCPTool = {
  name: "ringcentral_generate_ringout",
  description: "Initiate a RingCentral ringout call",
  inputSchema: {
    type: "object",
    properties: {
      from: { type: "string" },
      to: { type: "string" }
    },
    required: ["from", "to"]
  },
  handler: async (args: any) => {
    const { from, to } = args;
    return await generateRingout(from, to);
  }
};