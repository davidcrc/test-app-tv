import styled, { createGlobalStyle } from "styled-components";
import { Menu } from "../../components/menu/menu";
import { IAsset } from "../../components/content/asset";
import { Outlet } from "react-router-dom";

const menuItems = [
  "Home",
  "Dashboard",
  "Movies",
  "TV Shows",
  "Sports",
  "Music",
  "News",
  "Kids",
  "Lifestyle",
  "Entertainment",
  "More",
];

export const assets: IAsset[] = [
  {
    title: "Asset 1",
    color: "#714ADD",
  },
  {
    title: "Asset 2",
    color: "#AB8DFF",
  },
  {
    title: "Asset 3",
    color: "#512EB0",
  },
  {
    title: "Asset 4",
    color: "#714ADD",
  },
  {
    title: "Asset 5",
    color: "#AB8DFF",
  },
  {
    title: "Asset 6",
    color: "#512EB0",
  },
  {
    title: "Asset 7",
    color: "#714ADD",
  },
  {
    title: "Asset 8",
    color: "#AB8DFF",
  },
  {
    title: "Asset 9",
    color: "#512EB0",
  },
];

const AppContainer = styled.div`
  background-color: #221c35;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
`;

const AppLayout = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Menu focusKey="MENU" items={menuItems} />
      <Outlet />
    </AppContainer>
  );
};

export default AppLayout;
