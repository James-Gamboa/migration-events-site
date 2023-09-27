// @ts-nocheck
import { createRoot } from "react-dom/client";
import { Header } from "./components/react/Header";
import TabsContainer from "./components/react/TabsContainer";
import { homeTabs } from "./config.js";


const App = () => {
  return (
    <>
      <Header />
      <TabsContainer tabs={homeTabs} />
    </>
  );
};

  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App />);