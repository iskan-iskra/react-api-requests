import { APP_PATH } from "@/const";
import { NavLink } from "react-router-dom";

export const ErrorPage = () => (
  <>
    <h1>error page: 404 not found</h1>
    <div>
      <NavLink to={APP_PATH.MAIN}>вернуться на главную</NavLink>
    </div>
  </>
);
