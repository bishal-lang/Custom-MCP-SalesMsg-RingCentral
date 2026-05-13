import type { MCPTool } from "../../types/mcp.js";
import { createPost } from "../../services/ringcentral.services.js";

export const createPostTool: MCPTool = {
  name: "ringcentral_create_post",
  description: "Create a RingCentral Glip/Team post",
  inputSchema: {
    type: "object",
    properties: {
      text: { type: "string" }
    },
    required: ["text"],
    additionalProperties: false
  },
  handler: async (args) => {
    return createPost(args.chatId, args.text);
  }
};