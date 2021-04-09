import React from "react";
import { Page, Sun, Toggle } from "../components";

const Home = () => {
  const [theme, setTheme] = React.useState<boolean>(false);

  console.log(theme);

  return (
    <Page>
      <h1>Next Blog</h1>
      <Toggle
        prefixContent={<Sun />}
        name="theme"
        onToggle={setTheme}
        value={theme}
      />
    </Page>
  );
};

export default Home;
