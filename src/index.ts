import { Server } from "@modelcontextprotocol/sdk/server/index.js";

import { StdioServerTransport }
  from "@modelcontextprotocol/sdk/server/stdio.js";

import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from "@modelcontextprotocol/sdk/types.js";

import {
  createTextResponse
} from "./utils/response.js";

import {
  ringcentralCallLogsTool,
  ringcentralCreateContactTool,
  ringcentralSendSmsTool
} from "./tools/ringcentral.js";

import {
  salesmsgCreateContactTool,
  salesmsgListMessagesTool,
  salesmsgSendSmsTool
} from "./tools/salesmsg.js";

const server = new Server(
  {
    name: "custom-crm-server",
    version: "1.0.0"
  },

  {
    capabilities: {
      tools: {}
    }
  }
);

server.setRequestHandler(
  ListToolsRequestSchema,

  async () => {
    return {
      tools: [
        {
          name: "salesmsg_send_sms",

          description:
            "Send SMS using Salesmsg",

          inputSchema: {
            type: "object",

            properties: {
              phone: {
                type: "string"
              },

              message: {
                type: "string"
              }
            },

            required: [
              "phone",
              "message"
            ]
          }
        },

        {
          name:
            "salesmsg_create_contact",

          description:
            "Create Salesmsg contact",

          inputSchema: {
            type: "object",

            properties: {
              firstName: {
                type: "string"
              },

              lastName: {
                type: "string"
              },

              phone: {
                type: "string"
              }
            },

            required: [
              "firstName",
              "lastName",
              "phone"
            ]
          }
        },

        {
          name:
            "salesmsg_list_messages",

          description:
            "List Salesmsg messages",

          inputSchema: {
            type: "object",

            properties: {}
          }
        },

        {
          name:
            "ringcentral_send_sms",

          description:
            "Send SMS using RingCentral",

          inputSchema: {
            type: "object",

            properties: {
              phone: {
                type: "string"
              },

              message: {
                type: "string"
              }
            },

            required: [
              "phone",
              "message"
            ]
          }
        },

        {
          name:
            "ringcentral_call_logs",

          description:
            "Get RingCentral call logs",

          inputSchema: {
            type: "object",

            properties: {}
          }
        },

        {
          name:
            "ringcentral_create_contact",

          description:
            "Create RingCentral contact",

          inputSchema: {
            type: "object",

            properties: {
              firstName: {
                type: "string"
              },

              lastName: {
                type: "string"
              },

              phone: {
                type: "string"
              }
            },

            required: [
              "firstName",
              "lastName",
              "phone"
            ]
          }
        }
      ]
    };
  }
);

server.setRequestHandler(
  CallToolRequestSchema,

  async (request) => {
    const toolName =
      request.params.name;

    const args =
      request.params.arguments || {};

    switch (toolName) {
      case "salesmsg_send_sms": {
        const result =
          await salesmsgSendSmsTool({
            phone: String(args.phone),
            message: String(args.message)
          });

        return createTextResponse(result);
      }

      case "salesmsg_create_contact": {
        const result =
          await salesmsgCreateContactTool({
            firstName: String(
              args.firstName
            ),

            lastName: String(
              args.lastName
            ),

            phone: String(args.phone)
          });

        return createTextResponse(result);
      }

      case "salesmsg_list_messages": {
        const result =
          await salesmsgListMessagesTool();

        return createTextResponse(result);
      }

      case "ringcentral_send_sms": {
        const result =
          await ringcentralSendSmsTool({
            phone: String(args.phone),
            message: String(args.message)
          });

        return createTextResponse(result);
      }

      case "ringcentral_call_logs": {
        const result =
          await ringcentralCallLogsTool();

        return createTextResponse(result);
      }

      case "ringcentral_create_contact": {
        const result =
          await ringcentralCreateContactTool({
            firstName: String(
              args.firstName
            ),

            lastName: String(
              args.lastName
            ),

            phone: String(args.phone)
          });

        return createTextResponse(result);
      }

      default:
        throw new Error(
          `Unknown tool: ${toolName}`
        );
    }
  }
);

const transport =
  new StdioServerTransport();

await server.connect(transport);