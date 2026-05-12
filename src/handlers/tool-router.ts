import { salesmsgTools } from "../tools/salesmsg/index.js";
import { ringcentralTools } from "../tools/ringcentral/index.js";
import type { MCPTool } from "../types/mcp.js";

const allTools: MCPTool[] = [
  ...salesmsgTools,
  ...ringcentralTools
];

const toolMap: Record<string, MCPTool> = Object.fromEntries(
  allTools.map((tool) => [tool.name, tool])
);

function validateInput(tool: MCPTool, args: unknown) {
  const schema: any = tool.inputSchema;

  if (!schema) return args;

  if (schema.type !== "object") {
    throw new Error(`Invalid schema for tool ${tool.name}`);
  }

  if (typeof args !== "object" || args === null) {
    throw new Error(`Invalid input for tool ${tool.name}`);
  }

  const obj = args as Record<string, any>;

  if (schema.required?.length) {
    for (const key of schema.required) {
      if (obj[key] === undefined || obj[key] === null) {
        throw new Error(
          `Missing required field '${key}' for tool ${tool.name}`
        );
      }
    }
  }

  return args;
}

function normalizeError(toolName: string, err: any) {
  const message =
    err?.message ||
    err?.response?.data?.message ||
    "Unknown error";

  return {
    success: false,
    tool: toolName,
    error: message
  };
}

export async function runTool(name: string, args: unknown) {
  const tool = toolMap[name];

  if (!tool) {
    return {
      success: false,
      error: `Unknown tool: ${name}`
    };
  }

  try {
    const validatedArgs = validateInput(tool, args);

    const result = await tool.handler(validatedArgs);

    return {
      success: true,
      tool: name,
      result
    };
  } catch (err) {
    return normalizeError(name, err);
  }
}