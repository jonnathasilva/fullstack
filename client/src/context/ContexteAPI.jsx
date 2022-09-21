import { Children, createContext, useEffect, useState } from "react";
import api from "../utils/api";

const Context = createContext();

function APIProvider({ children }) {
  const [search, setSearch] = useState();
  const [vehicle, setVehicle] = useState();
  console.log(search);

  async function GetSearch(Search) {
    await api
      .post("/veiculos/find", { search: Search })
      .then(({ data }) => {
        setSearch(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function GetAll() {
    await api.get("/veiculos").then(({ data }) => {
      setVehicle(data);
    });
  }

  useEffect(() => {
    GetAll();
  }, []);

  return (
    <Context.Provider value={{ GetSearch, vehicle }}>
      {children}
    </Context.Provider>
  );
}

export { Context, APIProvider };
