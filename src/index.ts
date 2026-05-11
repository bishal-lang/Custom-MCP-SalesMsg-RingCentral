import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from 'zod'

const server = new McpServer({
  name: "custom-crm-server",
  version: "1.0.0",
});

server.tool(
  "ping",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: "pong",
      },
    ],
  })
);

server.tool(
  "hello_world",
  {},
  async () => ({
    content: [
      {
        type: "text",
        text: "MCP server is working",
      },
    ],
  })
);

server.tool(
  "send_sms",
  {
    phone: z.string(),
    message: z.string(),
  },
  async ({ phone, message }) => ({
    content: [
      {
        type: "text",
        text: `SMS sent to ${phone}: ${message}`,
      },
    ],
  })
);

const transport = new StdioServerTransport();

await server.connect(transport);