// import type { MCPTool } from "../../types/mcp.js";
// import { phoneLookup } from "../../services/salesmsg.services.js";

// export const salesmsgPhoneLookupTool: MCPTool = {
//   name: "salesmsg_phone_lookup",
//   description: "Lookup phone information",
//   inputSchema: {
//     type: "object",
//     properties: {
//       phone: { type: "string" }
//     },
//     required: ["phone"],
//     additionalProperties: false
//   },
//   handler: async (args) => {
//     return phoneLookup(args.phone);
//   }
// };