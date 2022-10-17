import * as styles from "./index.styles";
import { BsTagFill } from "react-icons/bs";

export const Vehicles = ({ vehicle, getById }) => {
  return (
    <styles.Vehicle>
      <h3>Lista de veículos</h3>

      <styles.AllVehicle>
        {vehicle?.map((vehicle) => (
          <styles.Cart key={vehicle._id} onClick={() => getById(vehicle?._id)}>
            <h4>{vehicle.brand}</h4>

            <div>
              <p>{vehicle.vehicle}</p>

              <BsTagFill
                size={25}
                style={{ color: vehicle?.sold ? "#49886e" : "#354046" }}
              />
            </div>

            <p>{vehicle.year}</p>
          </styles.Cart>
        ))}
      </styles.AllVehicle>
    </styles.Vehicle>
  );
};
