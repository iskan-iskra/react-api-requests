import { userService } from "@/api";
import { APP_PATH } from "@/const";
import { AppLayout } from "@/layout";
import {
  MainPage,
  BasicHookPage,
  CustomHookPage,
  CustomHocPage,
  ErrorPage,
  ReactRouterDOMPage,
  SWRLibPage,
  ReactQueryLibPage,
} from "@/pages";

import { createBrowserRouter, Navigate, defer } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to={APP_PATH.MAIN} replace /> },
      { path: APP_PATH.MAIN, element: <MainPage /> },
      { path: APP_PATH.BASIC_HOOK, element: <BasicHookPage /> },
      { path: APP_PATH.CUSTOM_HOOK, element: <CustomHookPage /> },
      { path: APP_PATH.CUSTOM_HOC, element: <CustomHocPage /> },
      {
        path: APP_PATH.REACT_ROUTER_DOM,
        element: <ReactRouterDOMPage />,
        loader: () => defer({ data: userService() }),
      },
      {
        path: APP_PATH.SWR_LIB,
        element: <SWRLibPage />,
      },
      {
        path: APP_PATH.REACT_QUERY_LIB,
        element: <ReactQueryLibPage />,
      },
    ],
  },
  { path: APP_PATH.ERROR, element: <ErrorPage /> },
  { path: "*", element: <Navigate to={APP_PATH.ERROR} replace /> },
]);
