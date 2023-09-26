// @ts-nocheck
import { createRoot } from "react-dom/client";
import { Header } from "./components/react/Header";
import { MainContent } from "./components/react/MainContent";
import { Tabs } from "./components/react/Tabs";
import { homeTabs } from "./config.js";

const App = () => {
  return (
    <>
      <Header />
      <Tabs tabs={homeTabs} />
      <MainContent />
    </>
  );
};

  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App />);