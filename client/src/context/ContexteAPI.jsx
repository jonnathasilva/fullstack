import { Children, createContext, useEffect, useState } from "react";
import api from "../utils/api";

const Context = createContext();

function APIProvider({ children }) {
  const [isModal, setIsModal] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);

  function modal() {
    setIsModal(isModal ? false : true);
  }

  function modalEdit() {
    setIsModalEdit(isModalEdit ? false : true);
  }

  return (
    <Context.Provider
      value={{
        modalEdit,
        isModalEdit,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, APIProvider };
