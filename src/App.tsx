import styled, { createGlobalStyle } from "styled-components";
import { Menu } from "./components/menu/menu";
import { Content } from "./components/content/content";
import { shuffle } from "lodash";
import { IAsset } from "./components/content/asset";
import Panels from "@enact/sandstone/Panels";
import { Header, Panel } from "@enact/sandstone/Panels";
import Button from "@enact/sandstone/Button";

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

const rows = shuffle([
  {
    title: "Recommended",
    assets: assets,
  },
  {
    title: "Movies",
    assets: assets,
  },
  {
    title: "Series",
    assets: assets,
  },
  {
    title: "TV Channels",
    assets: assets,
  },
  {
    title: "Sport",
    assets: assets,
  },
]);

const AppContainer = styled.div`
  background-color: #221c35;
  width: 100%;
  height: 810px;
  display: flex;
  flex-direction: row;
`;

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Menu focusKey="MENU" items={menuItems} />
      <Content rows={rows} focusKey="CONTENT" />
    </AppContainer>
    // <Panels>
    //   <Panel>
    //     <Header title="Hello world!" />
    //     <Button>Click me</Button>
    //     {/* <Counter /> */}
    //   </Panel>
    // </Panels>
  );
}

export default App;
