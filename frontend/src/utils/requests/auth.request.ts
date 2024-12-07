import { Endpoint } from "../../constants/endpoint";
import { Api } from "../fetch";
import { IAuthPayload } from "../../interfaces/auth.payload";

export const AuthRequest = async (props: IAuthPayload): Promise<any> => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  let data: any;

  switch (props.process) {
    case "login":
      data = {
        email: props.email,
        password: props.password,
      };
      break;
    case "register":
      data = {
        full_name: props.full_name,
        phone: props.phone,
        email: props.email,
        password: props.password,
      };
      break;
  }
  const response = await Api({
    url: `${BASE_URL}${Endpoint.auth}/${props.process}`,
    method: "POST",
    data: data,
  });

  let message: string = "";
  if (response.status === 200 || response.status === 201) {
    message = response.message;
  } else {
    const rawMessage = response.error;
    if (rawMessage.toLowerCase().includes("duplicate")) {
      message = `Email address ${props.email} already in use.`;
    } else {
      message = rawMessage;
    }
  }
  console.log("authreq response", response);
  return {
    status: response.status,
    message,
    ...(response.user ? { user: response.user } : {}),
    ...(response.token ? { token: response.token } : {}),
  };
};
