// @ts-nocheck
import { createRoot } from "react-dom/client";
import { HeaderAccount } from "./components/react/HeaderAccount";
import { MainContentAccount } from "./components/react/MainContentAccount";
import { interactionsTabs } from "./config";
import Tabs from "./components/react/Tabs";

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