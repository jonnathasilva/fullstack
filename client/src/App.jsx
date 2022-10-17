import { APIProvider } from "./context/ContexteAPI";
import { Header } from "./components";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <div className="ContainerMain">
      <APIProvider>
        <Header />
        <Main />
      </APIProvider>
    </div>
  );
};
