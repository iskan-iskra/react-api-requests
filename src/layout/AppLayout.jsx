import { useAppLogger } from "@/use";
import { AppHeader } from "@/widjets";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  useAppLogger();

  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};
