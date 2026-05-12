import type { CallToolResult } from "@modelcontextprotocol/sdk/types.js";

/**
 * Standard MCP text response
 */
export function createTextResponse(data: unknown): CallToolResult {
  return {
    content: [
      {
        type: "text",
        text:
          typeof data === "string"
            ? data
            : JSON.stringify(data, null, 2)
      }
    ]
  };
}

/**
 * Error response (safe for MCP Inspector)
 */
export function createErrorResponse(error: unknown): CallToolResult {
  return {
    content: [
      {
        type: "text",
        text:
          error instanceof Error
            ? `${error.name}: ${error.message}`
            : String(error)
      }
    ]
  };
}