export interface IRequest {
  url: string;
  headers?: any;
  data?: any;
  params?: any;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  token?: string;
}