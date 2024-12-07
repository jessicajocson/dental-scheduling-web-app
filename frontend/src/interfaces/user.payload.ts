export interface IUserPayload {
    method: "GET" | "PUT" | "DELETE";
    id: string;
    token?: string;
}