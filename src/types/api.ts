export type JsonPrimitive = string | number | boolean | null;

export type JsonValue =
  | JsonPrimitive
  | JsonValue[]
  | { [key: string]: JsonValue };

export type ApiResponse<T = any> = {
  data: T;
  status?: number;
  success?: boolean;
  message?: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  page?: number;
  pageSize?: number;
  total?: number;
};

export type ErrorResponse = {
  error: string;
  statusCode?: number;
  details?: unknown;
};