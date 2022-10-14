import * as styles from "../Create/index.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import axios from "axios";

import Input from "../../Input";
import InputCheckbox from "../../InputCheckbox";

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

function Edit({ vehicleById, isModalEdit, modalEdit, getAll, setVehicleById }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function Submit(data) {
    axios({
      method: "PATCH",
      baseURL: import.meta.env.VITE_URL,
      url: `/veiculos/${vehicleById._id}`,
      data,
    })
      .then(() => {
        setVehicleById("");
        getAll();
        modalEdit();
      })
      .catch((err) => console.log(err));
  }

  function deleteVehicle(id) {
    axios({
      method: "DELETE",
      baseURL: import.meta.env.VITE_URL,
      url: `/veiculos/${id}`,
    })
      .then(() => {
        modalEdit();
        setVehicleById();
        getAll();
      })
      .catch((err) => console.log(err));
  }

  return (
    <styles.Modal isModal={isModalEdit}>
      <styles.Container>
        <h2>Editar Veículo</h2>

        <styles.Form onSubmit={handleSubmit(Submit)}>
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
              type="button"
              onClick={() => {
                deleteVehicle(vehicleById._id);
              }}
            >
              Excluir
            </button>

            <input type="submit" value="EDITAR" />

            <button type="button" onClick={modalEdit}>
              Fecha
            </button>
          </div>
        </styles.Form>
      </styles.Container>
    </styles.Modal>
  );
}

export default Edit;
