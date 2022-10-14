import { useState } from "react";
import axios from "axios";

const api = () => {
  const [vehicleById, setVehicleById] = useState();
  const [vehicle, setVehicle] = useState();

  async function getSearch(Search) {
    await axios
      .post("/veiculos/find", { search: Search })
      .then(({ data }) => {
        setVehicle(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function getAll() {
    try {
      axios({
        method: "GET",
        baseURL: import.meta.env.VITE_URL,
        url: "/veiculos",
      });
    } catch (error) {
      return [];
    }
  }

  async function getById(id) {
    axios({
      method: "GET",
      baseURL: import.meta.env.VITE_URL,
      url: `/veiculos/${id}`,
    });
  }

  async function add(data) {
    await axios({
      method: "POST",
      baseURL: import.meta.env.VITE_URL,
      url: "/veiculos",
      data,
    }).then(() => {
      return getAll();
    });
  }

  async function editVehicle(data, id) {
    await axios({
      method: "PATCH",
      baseURL: import.meta.env.VITE_URL,
      url: `/veiculos/${id}`,
      data,
    })
      .then(() => {
        getById(id);
        getAll();
      })
      .catch((err) => console.log(err));
  }

  async function deleteById(id) {
    await axios({
      method: "DELETE",
      baseURL: import.meta.env.VITE_URL,
      url: `/veiculos/${id}`,
    })
      .then(() => {
        setIsModalEdit(false);
        setVehicleById("");
        getAll();
      })
      .catch((err) => console.log(err));
  }

  return {
    getAll,
    getById,
    getSearch,
    add,
    editVehicle,
    deleteById,
    vehicle,
    vehicleById,
  };
};
export default api;
