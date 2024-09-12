import React from "react";
import { Content } from "../components/content/content";
import { shuffle } from "lodash";
import { assets } from "../layout/app-layout/app-layout";

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
  {
    title: "Others",
    assets: assets,
  },
]);

function Home() {
  return <Content rows={rows} focusKey="CONTENT" />;
}

export default Home;
