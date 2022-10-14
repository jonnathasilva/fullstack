import { createContext, useState } from "react";

import axios from "axios";

const Context = createContext();

function APIProvider({ children }) {
  const [vehicle, setVehicle] = useState([]);

  function getVehicle() {
    axios({
      method: "GET",
      baseURL: import.meta.env.VITE_URL,
      url: "/veiculos",
    }).then(({ data }) => setVehicle(data));
  }

  return (
    <Context.Provider
      value={{
        getVehicle,
        setVehicle,
        vehicle,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, APIProvider };
