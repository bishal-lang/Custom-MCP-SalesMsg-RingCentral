type TokenData = {
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
};

const store = new Map<string, TokenData>();

export function setToken(
  provider: string,
  token: TokenData
) {
  store.set(provider, token);
}

export function getToken(provider: string) {
  return store.get(provider);
}

export function clearToken(provider: string) {
  store.delete(provider);
}