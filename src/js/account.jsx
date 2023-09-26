// @ts-nocheck
import { createRoot } from "react-dom/client";
import { HeaderAccount } from "./components/react/HeaderAccount";
import { MainContentAccount } from "./components/react/MainContentAccount";
import { Tabs } from "./components/react/Tabs";
import { interactionsTabs } from "./config";

const Account = () => {
  return (
    <>
      <HeaderAccount />
      <Tabs tabs={interactionsTabs}/>
      <MainContentAccount />
    </>
  );
};


  const container = document.getElementById("account");
  const root = createRoot(container);
  root.render(<Account />);