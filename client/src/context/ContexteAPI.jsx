import { Children, createContext, useEffect, useState } from "react";
import api from "../utils/api";

const Context = createContext();

function APIProvider({ children }) {
  const [vehicle, setVehicle] = useState();
  const [vehicleById, setVehicleById] = useState();
  const [isModal, setIsModal] = useState(false);

  function modal(e) {
    e.preventDefault();
    setIsModal(isModal ? false : true);
  }

  async function GetSearch(Search) {
    await api
      .post("/veiculos/find", { search: Search })
      .then(({ data }) => {
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

  async function ADD(data) {
    await api
      .post("/veiculos", data)
      .then(({ data }) => {
        setIsModal(false);
        GetAll();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    GetAll();
  }, []);

  return (
    <Context.Provider
      value={{ GetSearch, vehicle, GetById, vehicleById, isModal, modal, ADD }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, APIProvider };
