export function normalizePhone(phone: string): string {
  // removes spaces, dashes, parentheses, etc.
  const cleaned = phone.replace(/[^\d+]/g, "");

  // basic sanity check
  if (!cleaned) {
    throw new Error("Invalid phone number provided");
  }

  return cleaned;
}

export function normalizeString(value: string): string {
  return value.trim();
}

export function safeJsonParse<T = unknown>(value: string): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    throw new Error("Invalid JSON string provided");
  }
}