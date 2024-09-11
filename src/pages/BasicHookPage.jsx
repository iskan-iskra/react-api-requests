import { userService } from "@/api";
import { AppUsers } from "@/widjets";
import { useCallback, useEffect, useState } from "react";

export const BasicHookPage = () => {
  const [userList, setUserList] = useState([]);
  const [userError, setUserError] = useState(false);
  const [userLoading, setUserLoading] = useState(false);

  const getUserListHandler = useCallback(() => {
    const getData = async () => {
      try {
        setUserError(false);
        setUserLoading(true);
        const data = await userService();
        setUserList(data);
      } catch (error) {
        setUserError(true);
      } finally {
        setUserLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    getUserListHandler();
  }, [getUserListHandler]);

  return (
    <>
      <h1>Basic Hook Page</h1>
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
