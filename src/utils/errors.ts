
export class MCPError extends Error {
  code: string;
  statusCode: number;

  constructor(message: string, code = "MCP_ERROR", statusCode = 500) {
    super(message);
    this.name = "MCPError";
    this.code = code;
    this.statusCode = statusCode;
  }
}

export class ValidationError extends MCPError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR", 400);
    this.name = "ValidationError";
  }
}

export class ExternalAPIError extends MCPError {
  constructor(message: string, statusCode = 502) {
    super(message, "EXTERNAL_API_ERROR", statusCode);
    this.name = "ExternalAPIError";
  }
}

export class AuthenticationError extends MCPError {
  constructor(message = "Authentication failed") {
    super(message, "AUTH_ERROR", 401);
    this.name = "AuthenticationError";
  }
}