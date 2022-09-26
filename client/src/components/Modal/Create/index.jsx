import * as C from "./index.styles";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

import Input from "../../Input";
import { Context } from "../../../context/ContexteAPI";

const schema = yup.object({
  vehicle: yup.string().required("Obrigatório!"),
  brand: yup.string().required("Obrigatório"),
  year: yup
    .string()
    .required("Obrigatório")
    .max(4, "Data invalida")
    .min(4, "Data invalida"),
  description: yup.string().required("Obrigatório"),
});

function Add() {
  const { modal, isModal } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function Submit(data) {
    console.log(data);
  }

  return (
    <C.Modal isModal={isModal}>
      <C.Container>
        <h2>Novo Veículo</h2>

        <C.Form onSubmit={handleSubmit(Submit)}>
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

          <Input type="checkbox" name="sold" register={register} />

          <Input
            name="description"
            placeholder="Descrição"
            type="text"
            register={register}
            errorName={errors?.description?.message}
          />

          <input type="submit" value="ADD" />
          <button onClick={modal}>Fecha</button>
        </C.Form>
      </C.Container>
    </C.Modal>
  );
}

export default Add;
