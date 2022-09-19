import { Children, createContext, useState } from "react";
import api from "../utils/api";

const Context = createContext();

function APIProvider({ children }) {
  const [search, setSearch] = useState();
  console.log(search);

  async function GetSearch(Search) {
    console.log(Search);
    await api
      .post("/veiculos/find", { search: Search })
      .then(({ data }) => {
        setSearch(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return <Context.Provider value={{ GetSearch }}>{children}</Context.Provider>;
}

export { Context, APIProvider };
