import { useState, useContext } from "react";
import * as styles from "./index.styles";
import { MdOutlineAddCircle } from "react-icons/md";
import axios from "axios";

import { Vehicles } from "~/components/Vehicle";
import { VehicleInfo } from "~/components/VehicleInfo";
import { Add } from "~/components/Modal/Create";
import { Edit } from "~/components/Modal/Edit";
import { Context } from "../../context/ContexteAPI";

export const Main = () => {
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const { vehicle, getVehicle } = useContext(Context);
  const [vehicleById, setVehicleById] = useState();

  function modal() {
    setIsModal(isModal ? false : true);
  }

  function modalEdit() {
    setIsModalEdit(isModalEdit ? false : true);
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

      {isModal ? (
        <Add
          modal={modal}
          isModal={isModal}
          getAll={getVehicle}
          setVehicleById={setVehicleById}
        />
      ) : (
        " "
      )}

      {isModalEdit ? (
        <Edit
          vehicleById={vehicleById}
          setVehicleById={setVehicleById}
          isModalEdit={isModalEdit}
          modalEdit={modalEdit}
          getAll={getVehicle}
        />
      ) : (
        " "
      )}
    </styles.Container>
  );
};
