import type { MCPTool } from "../../types/mcp.js";
import { createVideoMeeting } from "../../services/ringcentral.services.js";

export const createVideoMeetingTool: MCPTool = {
  name: "ringcentral_create_video_meeting",
  description: "Create a RingCentral video meeting",
  inputSchema: {
    type: "object",
    properties: {
      topic: { type: "string" }
    },
    required: ["topic"]
  },
  handler: async (args) => {
    return createVideoMeeting(args.topic);
  }
};