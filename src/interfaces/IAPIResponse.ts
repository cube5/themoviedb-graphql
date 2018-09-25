export interface IErrorResponse {
  readonly status_message?: string;
  readonly status_code?: number;
}

export interface IPaginatedResponse<T> {
  readonly page: number;
  readonly results: T[];
  readonly total_results: number;
  readonly total_pages: number;
}

export default interface IAPIResponse<T>
  extends IErrorResponse,
    IPaginatedResponse<T> {}
