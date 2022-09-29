import * as C from "./index.styles";
import { BsTagFill } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";

function VehicleInfo({ vehicleById, modalEdit }) {
  return (
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
        <button
          onClick={() => {
            modalEdit();
          }}
        >
          <RiPencilFill size={23} /> editar
        </button>
        <BsTagFill
          size={25}
          style={{
            color: vehicleById?.sold ? "#49886e" : "#354046",
            marginRight: "15px",
          }}
        />
      </C.Buttons>
    </C.Vehicle>
  );
}

export default VehicleInfo;
