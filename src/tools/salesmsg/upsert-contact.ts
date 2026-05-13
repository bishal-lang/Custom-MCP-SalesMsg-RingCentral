// import type { MCPTool } from "../../types/mcp.js";
// import { upsertContact } from "../../services/salesmsg.services.js";

// export const upsertContactTool: MCPTool = {
//   name: "salesmsg_upsert_contact",
//   description: "Create or update contact",
//   inputSchema: {
//     type: "object",
//     properties: {
//       phone: { type: "string" },
//       data: { type: "object" }
//     },
//     required: ["phone"],
//     additionalProperties: false
//   },
//   handler: async (args) => {
//     return upsertContact(args.phone, args.data || {});
//   }
// };