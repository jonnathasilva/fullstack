import { APIProvider } from "./context/ContexteAPI";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="ContainerMain">
      <APIProvider>
        <Header />
        <Main />
      </APIProvider>
    </div>
  );
}

export default App;
