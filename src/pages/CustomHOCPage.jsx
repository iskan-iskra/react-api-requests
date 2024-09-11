import { userService } from "@/api";
import { withAppFetch } from "@/hoc";
import { AppUsers } from "@/widjets";
import PropTypes from "prop-types";
import { memo, useEffect } from "react";

const CustomHocPageCore = ({ data, error, loading, action }) => {
  useEffect(() => {
    action();
  }, [action]);

  return (
    <>
      <h1>Custom Hoc Page</h1>
      <div>
        <button disabled={loading} onClick={action}>
          refresh request
        </button>
      </div>
      <AppUsers
        userListData={data}
        userListError={error}
        userListLoading={loading}
      />
    </>
  );
};

CustomHocPageCore.propTypes = {
  data: PropTypes.array,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  action: PropTypes.func,
};

export const CustomHocPage = withAppFetch(
  memo(CustomHocPageCore),
  userService,
  []
);
