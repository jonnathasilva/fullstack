import * as C from "./index.styles";
import { useContext } from "react";

import Input from "../../Input";
import { Context } from "../../../context/ContexteAPI";

function Add() {
  const { modal, isModal } = useContext(Context);

  return (
    <C.Modal isModal={isModal}>
      <C.Container>
        <h2>Novo Veículo</h2>

        <C.Form>
          <Input name="vehicle" placeholder="Veículo" type="text" />
          <Input name="brand" placeholder="Marca" type="text" />
          <Input name="Year" placeholder="Ano" type="text" />
          <div>
            <input type="checkbox" name="sold" id="sold" />
            <label htmlFor="sold">Vendido</label>
          </div>
          <Input name="description" placeholder="Descrição" type="text" />
          <Input value="ADD" type="submit" />
          <button onClick={modal}>Fecha</button>
        </C.Form>
      </C.Container>
    </C.Modal>
  );
}

export default Add;
