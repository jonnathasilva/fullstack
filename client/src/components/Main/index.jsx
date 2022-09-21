import { useContext } from "react";
import * as C from "./index.styles";
import { MdOutlineAddCircle } from "react-icons/md";
import { BsTagFill } from "react-icons/bs";

import { Context } from "../../context/ContexteAPI";

function Main() {
  const { vehicle } = useContext(Context);
  return (
    <C.Container>
      <C.Header>
        <h2>Veículo</h2>
        <MdOutlineAddCircle
          size={30}
          style={{ color: "#354046", cursor: "pointer" }}
        />
      </C.Header>

      <C.Vehicle>
        <h3>Lista de veículos</h3>

        <C.AllVehicle>
          {vehicle?.map((vehicle) => (
            <C.Cart>
              <h4>{vehicle.brand}</h4>
              <div>
                <p>{vehicle.vehicle}</p>
                <BsTagFill size={25} color={"#354046"} />
              </div>
              <p>{vehicle.year}</p>
            </C.Cart>
          ))}
        </C.AllVehicle>
      </C.Vehicle>
    </C.Container>
  );
}

export default Main;
