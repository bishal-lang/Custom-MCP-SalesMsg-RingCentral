import type { MCPTool } from "../../types/mcp.js";
import { createNote } from "../../services/salesmsg.services.js";

export const createNoteTool: MCPTool = {
  name: "salesmsg_create_note",
  description: "Create note for contact",
  inputSchema: {
    type: "object",
    properties: {
      contactId: { type: "string" },
      note: { type: "string" }
    },
    required: ["contactId", "note"]
  },
  handler: async (args) => {
    return createNote(args.contactId, args.note);
  }
};