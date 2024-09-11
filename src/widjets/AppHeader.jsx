import { AppNavList } from "@/components";
import { APP_NAVIGATION } from "@/const";
import { memo } from "react";

const AppHeaderCore = () => {
  return (
    <header>
      <AppNavList navList={APP_NAVIGATION} />
    </header>
  );
};

export const AppHeader = memo(AppHeaderCore);
