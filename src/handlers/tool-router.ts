import { salesmsgTools } from "../tools/salesmsg/index.js";
import { ringcentralTools } from "../tools/ringcentral/index.js";
import type { MCPTool } from "../types/mcp.js";

/**
 * Flatten + index tools by name
 */
const allTools: MCPTool[] = [
  ...salesmsgTools,
  ...ringcentralTools
];

const toolMap: Record<string, MCPTool> = Object.fromEntries(
  allTools.map((tool) => [tool.name, tool])
);

export async function runTool(name: string, args: unknown) {
  const tool = toolMap[name];

  if (!tool) {
    throw new Error(`Unknown tool: ${name}`);
  }

  try {
    return await tool.handler(args);
  } catch (err) {
    throw err;
  }
}