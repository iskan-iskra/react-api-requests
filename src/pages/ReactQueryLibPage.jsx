import { userService } from "@/api";
import { REACT_QUERY_USER_LIST_KEY } from "@/const";
import { AppUsers } from "@/widjets";
import { useQuery } from "@tanstack/react-query";
import { withReactQuery } from "@/hoc";

const ReactQueryLibPageCore = () => {
  const {
    data: userList,
    error: userError,
    isLoading: userLoading,
    isFetching: userFetching,
    refetch: getUserListHandler,
  } = useQuery({
    queryKey: [REACT_QUERY_USER_LIST_KEY],
    queryFn: userService,
    refetchOnMount: "always",
    initialData: [],
  });

  return (
    <>
      <h1>React lib page</h1>
      <div>
        <button
          disabled={userLoading || userFetching}
          onClick={getUserListHandler}
        >
          refresh request
        </button>
      </div>
      <AppUsers
        userListData={userList}
        userListError={userError}
        userListLoading={userLoading || userFetching}
      />
    </>
  );
};

export const ReactQueryLibPage = withReactQuery(ReactQueryLibPageCore);
