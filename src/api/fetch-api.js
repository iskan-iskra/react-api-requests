import { BASE_API_URL } from "@/const";

const fetchAPI = async (url) => {
  const data = await fetch(`${BASE_API_URL}${url}`);
  return await data.json();
};

export default fetchAPI;
