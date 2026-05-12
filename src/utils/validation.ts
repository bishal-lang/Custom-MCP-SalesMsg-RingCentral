import { ValidationError } from "./errors.js";

/**
 * Ensures required fields exist in tool args
 */
export function requireFields(
  obj: Record<string, any>,
  fields: string[]
) {
  for (const field of fields) {
    if (
      obj[field] === undefined ||
      obj[field] === null ||
      obj[field] === ""
    ) {
      throw new ValidationError(
        `Missing required field: ${field}`
      );
    }
  }
}

/**
 * Validates string field
 */
export function assertString(
  value: unknown,
  fieldName: string
): asserts value is string {
  if (typeof value !== "string") {
    throw new ValidationError(
      `${fieldName} must be a string`
    );
  }
}

/**
 * Validates array of strings
 */
export function assertStringArray(
  value: unknown,
  fieldName: string
): asserts value is string[] {
  if (!Array.isArray(value)) {
    throw new ValidationError(
      `${fieldName} must be an array`
    );
  }

  for (const item of value) {
    if (typeof item !== "string") {
      throw new ValidationError(
        `${fieldName} must contain only strings`
      );
    }
  }
}