import PropTypes from "prop-types";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const AppNavListCore = ({ navList }) => (
  <nav>
    <ul>
      {navList.map((navItem, index) => (
        <li key={index}>
          <NavLink to={navItem.path}>{navItem.title}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
AppNavListCore.propTypes = {
  navList: PropTypes.array.isRequired,
};

export const AppNavList = memo(AppNavListCore);
