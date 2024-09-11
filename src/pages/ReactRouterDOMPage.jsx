import { AppError, AppLoading } from "@/components";
import { AppUsers } from "@/widjets";
import { Suspense } from "react";
import { useLoaderData, useRevalidator, Await } from "react-router-dom";

export const ReactRouterDOMPage = () => {
  const { data } = useLoaderData();
  const { revalidate, state } = useRevalidator();

  return (
    <>
      <h1>React-Router-DOM page</h1>
      <div>
        <button disabled={state === "loading"} onClick={() => revalidate(0)}>
          refresh request
        </button>
      </div>
      <Suspense fallback={<AppLoading />}>
        <Await
          resolve={data}
          errorElement={<AppError message="User List Error" />}
        >
          {(resolvedData) => (
            <AppUsers
              userListData={resolvedData}
              userListError={false}
              userListLoading={state === "loading"}
            />
          )}
        </Await>
      </Suspense>
    </>
  );
};
