function mockResponse(data: any) {
  return Promise.resolve({ data });
}

export const mockSalesmsgClient = {
  post: (url: string, body?: any) =>
    mockResponse({ success: true, mock: true, url, body }),

  get: (url: string) =>
    mockResponse({ success: true, mock: true, url }),

  delete: (url: string) =>
    mockResponse({ success: true, mock: true, url }),

  request: ({ method, url, data }: any) =>
    mockResponse({ success: true, mock: true, method, url, data })
};

export const mockRingcentralClient = {
  post: async (url: string, body?: any) => ({
    json: async () => ({ success: true, mock: true, url, body })
  }),

  get: async (url: string) => ({
    json: async () => ({ success: true, mock: true, url })
  }),

  put: async (url: string, body?: any) => ({
    json: async () => ({ success: true, mock: true, url, body })
  })
};