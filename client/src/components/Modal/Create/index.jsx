import * as styled from "./index.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";
import * as yup from "yup";

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

function Add({ modal, isModal, getAll }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function Submit(data) {
    await axios({
      method: "POST",
      baseURL: import.meta.env.VITE_URL,
      url: "/veiculos",
      data,
    }).then(() => {
      getAll();
      modal();
    });
    reset();
  }

  return (
    <styled.Modal isModal={isModal}>
      <styled.Container>
        <h2>Novo Veículo</h2>

        <styled.Form onSubmit={handleSubmit(Submit)}>
          <Input
            name="vehicle"
            placeholder="Veículo"
            type="text"
            register={register}
            errorName={errors?.vehicle?.message}
          />

          <Input
            name="brand"
            placeholder="Marca"
            type="text"
            register={register}
            errorName={errors?.brand?.message}
          />

          <Input
            name="year"
            placeholder="Ano"
            type="text"
            register={register}
            errorName={errors?.year?.message}
          />

          <InputCheckbox
            type="checkbox"
            placeholder="Vendido"
            name="sold"
            register={register}
          />

          <Input
            name="description"
            placeholder="Descrição"
            type="text"
            register={register}
            isDescription={true}
            errorName={errors?.description?.message}
          />

          <div className="submit">
            <input type="submit" value="ADD" />
            <button
              onClick={() => {
                modal();
                reset();
              }}
            >
              Fecha
            </button>
          </div>
        </styled.Form>
      </styled.Container>
    </styled.Modal>
  );
}

export default Add;
