export interface IAuthPayload {
    process: "login" | "register";
    email: string;
    password: string;
    full_name?: string;
    phone?: string;
}