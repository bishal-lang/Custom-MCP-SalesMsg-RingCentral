function getEnv(key: string): string {
  return process.env[key] ?? "";
}

function required(key: string): string {
  const value = getEnv(key);

  if (process.env.NODE_ENV === "production" && !value) {
    throw new Error(`Missing required env: ${key}`);
  }

  return value;
}

export const env = {
  NODE_ENV: getEnv("NODE_ENV") || "development",

  SALESMSG_API_KEY: getEnv("SALESMSG_API_KEY"),

  RINGCENTRAL_CLIENT_ID: getEnv("RINGCENTRAL_CLIENT_ID"),
  RINGCENTRAL_CLIENT_SECRET: getEnv("RINGCENTRAL_CLIENT_SECRET"),
  RINGCENTRAL_SERVER: getEnv("RINGCENTRAL_SERVER"),
  RINGCENTRAL_JWT: getEnv("RINGCENTRAL_JWT"),
  RINGCENTRAL_FROM_NUMBER: getEnv("RINGCENTRAL_FROM_NUMBER")
};