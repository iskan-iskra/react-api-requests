import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useAppLogger() {
  const location = useLocation();
  useEffect(() => {
    const message = "-".repeat(9) + "routing page" + "-".repeat(9);
    console.log(`%c${message}`, "color: #00f; font-size: 16px;");
  }, [location.pathname]);
}
