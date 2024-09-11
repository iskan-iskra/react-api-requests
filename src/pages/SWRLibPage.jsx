import { userService } from "@/api";
import { SWR_USER_LIST_KEY } from "@/const";
import { AppUsers } from "@/widjets";
import useSWR from "swr";

export const SWRLibPage = () => {
  const {
    data: userList,
    error: userError,
    isValidating: userValidating,
    isLoading: userLoading,
    mutate: getUserListHandler,
  } = useSWR(SWR_USER_LIST_KEY, userService, {
    revalidateIfStale: true,
    revalidateOnMount: true,
    keepPreviousData: true,
  });

  return (
    <>
      <h1>SWR lib page</h1>
      <div>
        <button
          disabled={userLoading || userValidating}
          onClick={getUserListHandler}
        >
          refresh request
        </button>
      </div>
      <AppUsers
        userListData={Array.isArray(userList) ? userList : undefined}
        userListError={userError}
        userListLoading={userLoading || userValidating}
      />
    </>
  );
};
