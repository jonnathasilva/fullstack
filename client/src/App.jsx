import Header from "./components/Header";
import { APIProvider } from "./context/ContexteAPI";

function App() {
  return (
    <div className="ContainerMain">
      <APIProvider>
        <Header />
      </APIProvider>
    </div>
  );
}

export default App;
