/**
 * Common type definitions for the application
 */

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
  success: boolean;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

/**
 * Environment variables type
 */
export interface Env {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_APP_URL?: string;
}
