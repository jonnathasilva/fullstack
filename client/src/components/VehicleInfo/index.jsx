import * as styles from "./index.styles";
import { BsTagFill } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";

export const VehicleInfo = ({ vehicleById, modalEdit }) => {
  return (
    <styles.Vehicle>
      <h3>Detalhes</h3>

      <styles.Info>
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
      </styles.Info>

      <styles.Buttons>
        <button onClick={modalEdit}>
          <RiPencilFill size={23} /> editar
        </button>

        <BsTagFill
          size={25}
          style={{
            color: vehicleById?.sold ? "#49886e" : "#354046",
            marginRight: "15px",
          }}
        />
      </styles.Buttons>
    </styles.Vehicle>
  );
};
