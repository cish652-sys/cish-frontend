export interface ApiConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

// Fix: Updated RequestConfig to handle body types properly
export interface RequestConfig {
  method?: string;
  headers?: Record<string, string>;
  body?: string | FormData | Blob | BufferSource | URLSearchParams | Record<string, unknown>;
  signal?: AbortSignal;
}

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
}

export type RequestInterceptor = (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
export type ResponseInterceptor = (response: Response) => Response | Promise<Response>;

export interface Interceptors {
  request: RequestInterceptor[];
  response: ResponseInterceptor[];
}

// Common API data types
export interface ApiError {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}
