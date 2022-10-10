import { useContext } from "react";
import * as C from "./index.styles";
import { MdOutlineAddCircle } from "react-icons/md";

import { Context } from "../../context/ContexteAPI";

import Vehicles from "../Vehicle";
import VehicleInfo from "../VehicleInfo";
import Add from "../Modal/Create";
import Edit from "../Modal/Edit";

function Main() {
  const { vehicle, GetById, vehicleById, modal, modalEdit, isModal, ADD } =
    useContext(Context);

  return (
    <C.Container>
      <C.Header>
        <h2>Veículo</h2>
        <MdOutlineAddCircle
          onClick={modal}
          size={30}
          style={{ color: "#354046", cursor: "pointer" }}
        />
      </C.Header>

      <C.ContainerVehicle>
        <Vehicles vehicle={vehicle} GetById={GetById} />

        {vehicleById ? (
          <VehicleInfo vehicleById={vehicleById} modalEdit={modalEdit} />
        ) : (
          " "
        )}
      </C.ContainerVehicle>

      <Add modal={modal} isModal={isModal} ADD={ADD} />
      {vehicleById ? <Edit vehicleById={vehicleById} /> : ""}
    </C.Container>
  );
}

export default Main;
