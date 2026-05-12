import { logger } from "../utils/logger.js";
import { createTextResponse } from "../utils/response.js";
import { MCPError } from "../utils/errors.js";

export async function executeTool(
  toolName: string,
  handler: () => Promise<any>
) {
  try {
    logger.info(`Executing tool: ${toolName}`);

    const result = await handler();

    return createTextResponse(result);
  } catch (err) {
    logger.error(`Tool failed: ${toolName}`, err);

    if (err instanceof MCPError) {
      return createTextResponse({
        error: err.code,
        message: err.message
      });
    }

    return createTextResponse({
      error: "INTERNAL_ERROR",
      message:
        err instanceof Error
          ? err.message
          : String(err)
    });
  }
}