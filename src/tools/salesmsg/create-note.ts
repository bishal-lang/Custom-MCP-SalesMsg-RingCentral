import type { MCPTool } from "../../types/mcp.js";
import { createNote } from "../../services/salesmsg.services.js";

export const salesmsgCreateNoteTool: MCPTool = {
  name: "salesmsg_create_note",
  description: "Create note",
  inputSchema: {
    type: "object",
    properties: {
      contactId: { type: "string" },
      note: { type: "string" }
    },
    required: ["contactId", "note"],
    additionalProperties: false
  },
  handler: async (args) => {
    return createNote(args.contactId, args.note);
  }
};