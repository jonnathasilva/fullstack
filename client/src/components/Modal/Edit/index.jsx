import * as C from "../Create/index.styles";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import Input from "../../Input";
import InputCheckbox from "../../InputCheckbox";
import { Context } from "../../../context/ContexteAPI";

const schema = yup.object({
  vehicle: yup.string().required("Obrigatório"),
  brand: yup.string().required("Obrigatório"),
  year: yup
    .string()
    .required("Obrigatório")
    .max(4, "Data invalida")
    .min(4, "Data invalida"),
  description: yup.string().required("Obrigatório"),
});

function Edit({ vehicleById }) {
  const { isModalEdit, modalEdit, editVehicle, Delete } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function Submit(data) {
    editVehicle(data, vehicleById?._id);
  }

  return (
    <C.Modal isModal={isModalEdit}>
      <C.Container>
        <h2>Editar Veículo</h2>

        <C.Form onSubmit={handleSubmit(Submit)}>
          <Input
            name="vehicle"
            placeholder="Veículo"
            type="text"
            register={register}
            value={vehicleById.vehicle}
            errorName={errors?.vehicle?.message}
          />

          <Input
            name="brand"
            placeholder="Marca"
            type="text"
            register={register}
            value={vehicleById.brand}
            errorName={errors?.brand?.message}
          />

          <Input
            name="year"
            placeholder="Ano"
            type="text"
            register={register}
            value={vehicleById.year}
            errorName={errors?.year?.message}
          />

          <InputCheckbox
            type="checkbox"
            placeholder="Vendido"
            name="sold"
            checked={vehicleById.sold}
            register={register}
          />

          <Input
            name="description"
            placeholder="Descrição"
            type="text"
            value={vehicleById.description}
            register={register}
            isDescription={true}
            errorName={errors?.description?.message}
          />

          <div className="submit">
            <button
              onClick={() => {
                Delete(vehicleById._id);
              }}
            >
              Excluir
            </button>
            <input type="submit" value="EDITAR" />
            <button onClick={modalEdit}>Fecha</button>
          </div>
        </C.Form>
      </C.Container>
    </C.Modal>
  );
}

export default Edit;
