import ky from "ky";
import { BASE_API_URL } from "@/const";

const kyAPI = async (url) => {
  const data = await ky.get(`${BASE_API_URL}${url}`);
  return await data.json();
};

export default kyAPI;
