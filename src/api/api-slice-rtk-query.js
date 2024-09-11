import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL, USER_API_ENDPOINT } from "@/const";

export const apiSlice = createApi({
  reducerPath: "user-api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => USER_API_ENDPOINT,
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
