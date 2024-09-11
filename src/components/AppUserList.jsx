import { memo } from "react";
import { AppUserCard } from ".";
import PropTypes from "prop-types";
const AppUserListCore = ({ userList }) => {
  if (userList.length) {
    return (
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <AppUserCard userId={user.id} userName={user.name} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <div>user list is empty</div>;
  }
};

AppUserListCore.propTypes = {
  userList: PropTypes.array.isRequired,
};

export const AppUserList = memo(AppUserListCore);
