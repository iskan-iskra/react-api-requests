import { memo } from "react";
import PropTypes from "prop-types";

const AppErrorCore = ({ message }) => (
  <div>
    <h1>Error</h1>
    <p>{message}</p>
  </div>
);

AppErrorCore.propTypes = {
  message: PropTypes.string.isRequired,
};

export const AppError = memo(AppErrorCore);
