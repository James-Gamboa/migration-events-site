 import { createRoot } from "react-dom/client";
 import { HeaderAccount } from "./components/react/HeaderAccount";
 import { MainContentAccount } from "./components/react/MainContentAccount";

 const Account = () => {
   return (
     <>
       <HeaderAccount />
       <MainContentAccount />
      
     </>
   );
 };

 const container = document.getElementById("root2");
 const root = createRoot(container);
 root.render(<Account />);