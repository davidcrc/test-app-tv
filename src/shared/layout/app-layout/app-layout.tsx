import { Outlet } from "react-router-dom";
import { Episodes, Home, Search, Setting } from "../../assets/svg";
import { Paths } from "../../../router/paths/path.routes";
import * as S from "./app-layout.style";
import { Menu } from "./components/menu";

const menuItems = [
  { label: "Home", icon: Home, path: Paths.INDEX },
  { label: "Search", icon: Search, path: Paths.SEARCH },
  { label: "Collection", icon: Episodes, path: Paths.EPISODES },
  { label: "Settings", icon: Setting, path: Paths.SETTINGS },
];

export const AppLayout = () => (
  <S.AppContainer>
    <Menu focusKey="MENU" items={menuItems} />
    <S.Content>
      <Outlet />
    </S.Content>
  </S.AppContainer>
);
