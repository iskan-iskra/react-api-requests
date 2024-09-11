export const APP_PATH = {
  MAIN: "/main",
  BASIC_HOOK: "/basic-hook",
  CUSTOM_HOOK: "/custom-hook",
  CUSTOM_HOC: "/custom-hoc",
  REACT_ROUTER_DOM: "/react-router-dom",
  SWR_LIB: "/swr-lib",
  REACT_QUERY_LIB: "/react-query",
  ERROR: "/404",
};

export const APP_NAVIGATION = [
  { path: APP_PATH.path, title: "Main page" },
  { path: APP_PATH.BASIC_HOOK, title: "Basic hook page" },
  { path: APP_PATH.CUSTOM_HOOK, title: "Custom hook page" },
  { path: APP_PATH.CUSTOM_HOC, title: "Custom HOC page" },
  { path: APP_PATH.REACT_ROUTER_DOM, title: "React-router-dom page" },
  { path: APP_PATH.SWR_LIB, title: "SWR-lib page" },
  { path: APP_PATH.REACT_QUERY_LIB, title: "React-Query-lib page" },
];
