import type { ToolResponse } from "../types/tool.js";

export function createTextResponse(
  data: unknown
): ToolResponse {
  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(data, null, 2)
      }
    ]
  };
}