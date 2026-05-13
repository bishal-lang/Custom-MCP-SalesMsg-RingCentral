import type { MCPTool } from "../../types/mcp.js";
import { createVideoMeeting } from "../../services/ringcentral.services.js";

export const ringcentralCreateVideoMeetingTool: MCPTool = {
  name: "ringcentral_create_video_meeting",
  description: "Create video meeting",
  inputSchema: {
    type: "object",
    properties: {
      accountId: { type: "string" },
      extensionId: { type: "string" },
      topic: { type: "string" }
    },
    required: ["accountId", "extensionId", "topic"],
    additionalProperties: false
  },
  handler: async (args) => {
    return createVideoMeeting(
      args.accountId,
      args.extensionId,
      args.topic
    );
  }
};