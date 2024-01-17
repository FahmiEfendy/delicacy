import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const jsonUrl = import.meta.env.VITE_JSON_URL;

export const callApi = async (
  endpoint,
  method,
  headers = {},
  params = {},
  data = {},
  json = false
) => {
  const options = {
    url: json ? jsonUrl + endpoint : baseUrl + endpoint,
    method,
    headers,
    params,
    data,
  };

  return axios(options).then((response) => {
    return response?.data;
  });
};
