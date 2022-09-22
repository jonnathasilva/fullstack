import { Children, createContext, useEffect, useState } from "react";
import api from "../utils/api";

const Context = createContext();

function APIProvider({ children }) {
  const [vehicle, setVehicle] = useState();
  const [vehicleById, setVehicleById] = useState();

  async function GetSearch(Search) {
    await api
      .post("/veiculos/find", { search: Search })
      .then(({ data }) => {
        console.log(data);
        setVehicle(data);
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

  async function GetById(id) {
    await api.get(`/veiculos/${id}`).then(({ data }) => {
      setVehicleById(data);
    });
  }

  useEffect(() => {
    GetAll();
  }, []);

  return (
    <Context.Provider value={{ GetSearch, vehicle, GetById, vehicleById }}>
      {children}
    </Context.Provider>
  );
}

export { Context, APIProvider };
