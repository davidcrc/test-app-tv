import { Outlet } from "react-router-dom";
import { Episodes, Home, Search, Setting } from "../../assets/svg";
import { Paths } from "../../../router/paths/path.routes";
import { IAsset } from "../../../components/content/asset";
import * as S from "./app-layout.style";
import { Menu } from "./components/menu";

const menuItems = [
  { label: "Home", icon: Home, path: Paths.INDEX },
  { label: "Search", icon: Search, path: Paths.SEARCH },
  { label: "Collection", icon: Episodes, path: Paths.EPISODES },
  { label: "Settings", icon: Setting, path: Paths.SETTINGS },
];

export const assets: IAsset[] = [
  {
    title: "Asset 1",
    color: "#019FB8",
  },
  {
    title: "Asset 2",
    color: "#018AA0",
  },
  {
    title: "Asset 3",
    color: "#017588",
  },
  {
    title: "Asset 4",
    color: "#015F70",
  },
  {
    title: "Asset 5",
    color: "#01D1A8",
  },
  {
    title: "Asset 6",
    color: "#01A8D1",
  },
  {
    title: "Asset 7",
    color: "#0186D1",
  },
  {
    title: "Asset 8",
    color: "#0116D1",
  },
  {
    title: "Asset 9",
    color: "#0816AC",
  },
];

export const AppLayout = () => (
  <S.AppContainer>
    <Menu focusKey="MENU" items={menuItems} />
    <S.Content>
      <Outlet />
    </S.Content>
  </S.AppContainer>
);
