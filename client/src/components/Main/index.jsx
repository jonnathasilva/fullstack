import { useContext } from "react";
import * as C from "./index.styles";
import { MdOutlineAddCircle } from "react-icons/md";
import { BsTagFill } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";

import { Context } from "../../context/ContexteAPI";

function Main() {
  const { vehicle, GetById, vehicleById } = useContext(Context);

  return (
    <C.Container>
      <C.Header>
        <h2>Veículo</h2>
        <MdOutlineAddCircle
          size={30}
          style={{ color: "#354046", cursor: "pointer" }}
        />
      </C.Header>
      <C.ContainerVehicle>
        <C.Vehicle>
          <h3>Lista de veículos</h3>

          <C.AllVehicle>
            {vehicle?.map((vehicle) => (
              <C.Cart
                key={vehicle._id}
                onClick={() => {
                  GetById(vehicle?._id);
                }}
              >
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

        {vehicleById ? (
          <C.Vehicle>
            <h3>Detalhes</h3>

            <C.Info>
              <h2>{vehicleById?.vehicle}</h2>

              <div className="ContainerSubInfo">
                <div className="infoCol">
                  <strong>Marca</strong>
                  <p>{vehicleById?.brand}</p>
                </div>

                <div className="infoCol">
                  <strong>Ano</strong>
                  <p>{vehicleById?.year}</p>
                </div>
              </div>

              <p id="description">{vehicleById?.description}</p>
            </C.Info>
            <C.Buttons>
              <button>
                <RiPencilFill size={23} /> editar
              </button>
              <BsTagFill
                size={25}
                style={{ color: "#354046", marginRight: "15px" }}
              />
            </C.Buttons>
          </C.Vehicle>
        ) : (
          ""
        )}
      </C.ContainerVehicle>
    </C.Container>
  );
}

export default Main;
