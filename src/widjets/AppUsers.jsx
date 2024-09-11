import { AppUserList, AppError, AppLoading } from "@/components";
import PropTypes from "prop-types";
import { memo } from "react";
const AppUsersCore = ({ userListLoading, userListData, userListError }) => {
  if (userListLoading) {
    return <AppLoading />;
  }
  if (userListError) {
    return <AppError message="user list error" />;
  }
  return <AppUserList userList={userListData} />;
};

AppUsersCore.propTypes = {
  userListLoading: PropTypes.bool,
  userListData: PropTypes.array,
  userListError: PropTypes.bool,
};

export const AppUsers = memo(AppUsersCore);
