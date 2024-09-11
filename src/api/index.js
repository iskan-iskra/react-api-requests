import fetchAPI from "./fetch-api";
import kyAPI from "./ky-api";
import axiosAPI from "./axios-api";

import { USER_API_ENDPOINT } from "@/const";
import { delayDecorator, withAsyncLogs } from "@/tools";

const API_METHODS = {
  fetchAPI,
  kyAPI,
  axiosAPI,
};

const requsetDelayImitaion = 2000;

const userServiceCore = API_METHODS.fetchAPI;

const userServiceWithLogs = withAsyncLogs(userServiceCore);

const userServiceDelayed = delayDecorator(
  userServiceWithLogs,
  requsetDelayImitaion
);

export const userService = () => userServiceDelayed(USER_API_ENDPOINT);

export { queryClient } from "./react-query";
