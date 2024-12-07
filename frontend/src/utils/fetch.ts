import { IRequest } from "../interfaces/request";

export const Api = async (params: IRequest): Promise<any> => {
  let parameter = "";
  if (params.headers === undefined) {
    params["headers"] = {
      "Content-Type": "application/json",
      ...(params.token ? { authorization: `Bearer ${params.token}` } : {}),
      ...(params.method === "GET" && params.data
        ? { id: `Bearer ${params.data.id}` }
        : {}),
    };
  }
  let url = params.url + parameter;

  const requestOption = {
    method: params.method,
    headers: params.headers,
    ...(params.method === "GET" && !params.data
      ? {}
      : { body: JSON.stringify(params.data) }),
  };
  console.log("PARAMETERS IN API", params);
  const response = await fetch(url, requestOption);
  const outputJson = await response.json();
  outputJson["status"] = response.status;
  console.log("RESPONSE", outputJson);

  return outputJson;
};
