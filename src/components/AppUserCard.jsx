import PropTypes from "prop-types";
import { memo } from "react";

const AppUserCardCore = ({ userId, userName }) => {
  if (userId && userName) {
    return (
      <>
        <div>
          <span>user with id:</span>
          <span>{userId}</span>
        </div>
        <div>
          <span>user with name:</span>
          <span>{userName}</span>
        </div>
      </>
    );
  } else {
    return <div>damaged user</div>;
  }
};

AppUserCardCore.propTypes = {
  userId: PropTypes.number,
  userName: PropTypes.string,
};

export const AppUserCard = memo(AppUserCardCore);
