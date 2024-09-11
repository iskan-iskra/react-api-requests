import { userService } from "@/api";
import { useAppFetch } from "@/use";
import { AppUsers } from "@/widjets";
import { useEffect } from "react";

export const CustomHookPage = () => {
  const [userList, userError, userLoading, getUserListHandler] = useAppFetch(
    [],
    userService
  );

  useEffect(() => {
    getUserListHandler();
  }, [getUserListHandler]);

  return (
    <>
      <h1>Custom Hook Page</h1>
      <div>
        <button disabled={userLoading} onClick={getUserListHandler}>
          refresh request
        </button>
      </div>
      <AppUsers
        userListData={userList}
        userListError={userError}
        userListLoading={userLoading}
      />
    </>
  );
};
