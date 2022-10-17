import { useState, useContext, useEffect } from "react";
import * as styles from "./index.styles";
import { MdOutlineWaterDrop } from "react-icons/md";
import axios from "axios";

import { Context } from "~/context/ContexteAPI";

export const Header = () => {
  const [search, setSearch] = useState("");
  const { setVehicle, getVehicle } = useContext(Context);

  function handleOnChange(e) {
    e.preventDefault();
    if (search !== "") {
      axios({
        method: "GET",
        baseURL: import.meta.env.VITE_URL,
        url: `/veiculos/find/${search}`,
      }).then(({ data }) => setVehicle(data));
    }
  }

  useEffect(() => {
    if (search === "") getVehicle();
  }, [search]);

  return (
    <styles.Container>
      <styles.SectionLogo>
        <MdOutlineWaterDrop size={40} color={"#FFF"} />

        <h1>Fullstack</h1>
      </styles.SectionLogo>

      <styles.SectionSearch onSubmit={handleOnChange}>
        <label htmlFor="search">Busca por um veículo</label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="BUSCA por um veículo"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </styles.SectionSearch>
    </styles.Container>
  );
};
