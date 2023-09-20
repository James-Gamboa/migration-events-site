import { createRoot } from "react-dom/client";
import { Header } from './components/react/Header';
import { MainContent } from "./components/react/MainContent";
import { Tabs } from "./components/react/Tabs";

const App = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Tabs/>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);