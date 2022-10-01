import { Children, createContext, useEffect, useState } from "react";
import api from "../utils/api";

const Context = createContext();

function APIProvider({ children }) {
  const [vehicle, setVehicle] = useState();
  const [vehicleById, setVehicleById] = useState();
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);

  function modal() {
    setIsModal(isModal ? false : true);
  }

  function modalEdit() {
    setIsModalEdit(isModalEdit ? false : true);
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

  async function ADD(data, reset) {
    await api
      .post("/veiculos", data)
      .then(() => {
        reset();
        setIsModal(false);
        GetAll();
      })
      .catch((err) => console.log(err));
  }

  async function editVehicle(data, id, reset) {
    await api
      .patch(`/veiculos/${id}`, data)
      .then(() => {
        reset();
        setIsModalEdit(false);
        GetById(id);
        GetAll();
      })
      .catch((err) => console.log(err));
  }

  async function Delete(id) {
    console.log(id);
    await api
      .delete(`/veiculos/${id}`)
      .then(() => {
        setIsModalEdit(false);
        setVehicleById("");
        GetAll();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    GetAll();
  }, []);

  return (
    <Context.Provider
      value={{
        GetSearch,
        vehicle,
        GetById,
        vehicleById,
        isModal,
        modal,
        ADD,
        modalEdit,
        isModalEdit,
        editVehicle,
        Delete,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, APIProvider };
