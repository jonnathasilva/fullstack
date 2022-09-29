import * as C from "./index.styles";
import { BsTagFill } from "react-icons/bs";

function Vehicles({ vehicle, GetById }) {
  return (
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
              <BsTagFill
                size={25}
                style={{ color: vehicle?.sold ? "#49886e" : "#354046" }}
              />
            </div>
            <p>{vehicle.year}</p>
          </C.Cart>
        ))}
      </C.AllVehicle>
    </C.Vehicle>
  );
}

export default Vehicles;
