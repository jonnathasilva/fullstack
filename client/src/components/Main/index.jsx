// import { useContext } from "react";
import { useState } from "react";
import * as styles from "./index.styles";
import { MdOutlineAddCircle } from "react-icons/md";
import axios from "axios";

import Vehicles from "../Vehicle";
import VehicleInfo from "../VehicleInfo";
import Add from "../Modal/Create";
import Edit from "../Modal/Edit";
import { useEffect } from "react";

function Main() {
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);

  const [vehicle, setVehicle] = useState([]);
  const [vehicleById, setVehicleById] = useState([]);

  console.log(isModal);

  function modal() {
    setIsModal(isModal ? false : true);
  }

  function modalEdit() {
    setIsModalEdit(isModalEdit ? false : true);
  }

  function getVehicle() {
    axios({
      method: "GET",
      baseURL: import.meta.env.VITE_URL,
      url: "/veiculos",
    }).then(({ data }) => setVehicle(data));
  }

  function geById(id) {
    axios({
      method: "GET",
      baseURL: import.meta.env.VITE_URL,
      url: `/veiculos/${id}`,
    }).then(({ data }) => {
      setVehicleById(data);
    });
  }

  useEffect(() => {
    getVehicle();
  }, []);

  return (
    <styles.Container>
      <styles.Header>
        <h2>Veículo</h2>
        <MdOutlineAddCircle
          onClick={modal}
          size={30}
          style={{ color: "#354046", cursor: "pointer" }}
        />
      </styles.Header>

      <styles.ContainerVehicle>
        <Vehicles vehicle={vehicle} getById={geById} />

        {vehicleById ? (
          <VehicleInfo vehicleById={vehicleById} modalEdit={modalEdit} />
        ) : (
          " "
        )}
      </styles.ContainerVehicle>

      <Add modal={modal} isModal={isModal} getAll={getVehicle} />

      {vehicleById ? <Edit vehicleById={vehicleById} /> : " "}
    </styles.Container>
  );
}

export default Main;
