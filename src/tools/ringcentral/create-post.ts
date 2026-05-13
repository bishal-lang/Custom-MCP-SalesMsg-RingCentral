import type { MCPTool } from "../../types/mcp.js";
import { createPost } from "../../services/ringcentral.services.js";

export const ringcentralCreatePostTool: MCPTool = {
  name: "ringcentral_create_post",
  description: "Create team post",
  inputSchema: {
    type: "object",
    properties: {
      chatId: { type: "string" },
      text: { type: "string" }
    },
    required: ["chatId", "text"],
    additionalProperties: false
  },
  handler: async (args) => {
    return createPost(args.chatId, args.text);
  }
};