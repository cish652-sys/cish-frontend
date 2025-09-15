import {
  ApiConfig,
  RequestConfig,
  ApiResponse,
  Interceptors,
  RequestInterceptor,
  ResponseInterceptor,
} from "./types";
import { API_CONFIG } from "./config";

class ApiClient {
  private baseURL: string;
  private timeout: number;
  private defaultHeaders: Record<string, string>;
  private interceptors: Interceptors;

  constructor(config: ApiConfig = API_CONFIG) {
    this.baseURL = config.baseURL;
    this.timeout = config.timeout;
    this.defaultHeaders = config.headers;
    this.interceptors = {
      request: [],
      response: [],
    };
  }

  // Add request interceptor
  addRequestInterceptor(interceptor: RequestInterceptor): void {
    this.interceptors.request.push(interceptor);
  }

  // Add response interceptor
  addResponseInterceptor(interceptor: ResponseInterceptor): void {
    this.interceptors.response.push(interceptor);
  }

  // Apply request interceptors
  private async applyRequestInterceptors(config: RequestConfig): Promise<RequestConfig> {
    let modifiedConfig = { ...config };

    for (const interceptor of this.interceptors.request) {
      modifiedConfig = await interceptor(modifiedConfig);
    }

    return modifiedConfig;
  }

  // Apply response interceptors
  private async applyResponseInterceptors(response: Response): Promise<Response> {
    let modifiedResponse = response;

    for (const interceptor of this.interceptors.response) {
      modifiedResponse = await interceptor(modifiedResponse);
    }

    return modifiedResponse;
  }

  // Main request method
  async request<T = unknown>(
    endpoint: string,
    options: RequestConfig = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;

    // Prepare request config - Fix: Create proper RequestInit object
    const config: RequestInit = {
      method: options.method || "GET",
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    // Handle different body types - Fix: Proper type handling
    if (options.body !== undefined) {
      if (
        typeof options.body === "object" &&
        !(options.body instanceof FormData) &&
        !(options.body instanceof Blob) &&
        !(options.body instanceof ArrayBuffer) &&
        !(options.body instanceof URLSearchParams)
      ) {
        // It's a plain object, stringify it
        config.body = JSON.stringify(options.body);
      } else {
        // It's already a valid body type
        config.body = options.body as BodyInit;
      }
    }

    // Apply request interceptors - Fix: Convert back to RequestConfig for interceptors
    const interceptorConfig: RequestConfig = {
      method: config.method,
      headers: config.headers as Record<string, string>,
      body: options.body, // Keep original body for interceptors
    };

    const modifiedConfig = await this.applyRequestInterceptors(interceptorConfig);

    // Update config with interceptor changes
    if (modifiedConfig.headers) {
      config.headers = modifiedConfig.headers;
    }
    if (modifiedConfig.method) {
      config.method = modifiedConfig.method;
    }

    try {
      // Add timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      config.signal = controller.signal;

      const response = await fetch(url, config);
      clearTimeout(timeoutId);

      // Apply response interceptors
      const interceptedResponse = await this.applyResponseInterceptors(response);

      if (!interceptedResponse.ok) {
        throw new Error(`HTTP error! status: ${interceptedResponse.status}`);
      }

      const data: T = await interceptedResponse.json();
      return { data, status: interceptedResponse.status };
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("Request timeout");
      }
      throw error;
    }
  }

  // Convenience methods with proper typing
  get<T = unknown>(
    endpoint: string,
    options: Omit<RequestConfig, "body"> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  post<T = unknown>(
    endpoint: string,
    body?: Record<string, unknown> | FormData | string | Blob | URLSearchParams,
    options: Omit<RequestConfig, "body" | "method"> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "POST", body });
  }

  put<T = unknown>(
    endpoint: string,
    body?: Record<string, unknown> | FormData | string | Blob | URLSearchParams,
    options: Omit<RequestConfig, "body" | "method"> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "PUT", body });
  }

  patch<T = unknown>(
    endpoint: string,
    body?: Record<string, unknown> | FormData | string | Blob | URLSearchParams,
    options: Omit<RequestConfig, "body" | "method"> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "PATCH", body });
  }

  delete<T = unknown>(
    endpoint: string,
    options: Omit<RequestConfig, "body"> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
}

// Create and configure the main API client
const apiClient = new ApiClient();

// Add auth token interceptor
apiClient.addRequestInterceptor((config: RequestConfig): RequestConfig => {
  if (typeof window !== "undefined") {
    // Check if we're in the browser
    const token = localStorage.getItem("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Add response interceptor for handling auth errors
apiClient.addResponseInterceptor(async (response: Response): Promise<Response> => {
  if (response.status === 401 && typeof window !== "undefined") {
    // Handle unauthorized access
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
  return response;
});

export default apiClient;
