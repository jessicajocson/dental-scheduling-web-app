import { Endpoint } from "../../constants/endpoint";
import { Api } from "../fetch";
import { IUserPayload } from "../../interfaces/user.payload";

export const UserRequest = async (props: IUserPayload): Promise<any> => {
  const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  console.log("PROPS FOR DASH", props);
  const response = await Api({
    url: `${BASE_URL}${Endpoint.user}/appointments${
      props.method === "GET" ? "" : `/${props.id}`
    }`,
    method: props.method,
    ...(props.id
      ? {
          headers: {
            "Content-Type": "application/json",
            id: props.id,
            authorization: props.token,
          },
        }
      : {}),
    ...(props.token ? { token: props.token } : {}),
  });

  return response;
};