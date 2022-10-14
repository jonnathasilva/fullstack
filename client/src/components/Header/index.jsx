import { useState, useContext } from "react";
import * as styles from "./index.styles";
import { MdOutlineWaterDrop } from "react-icons/md";
import axios from "axios";

import { Context } from "../../context/ContexteAPI";

function Header() {
  const [search, setSearch] = useState();
  const { setVehicle } = useContext(Context);

  function Search(e) {
    setSearch(e.target.value);
  }

  function handleOnChange(e) {
    e.preventDefault();
    axios({
      method: "POST",
      baseURL: import.meta.env.VITE_URL,
      url: "/veiculos/find",
      data: { search },
    }).then(({ data }) => setVehicle(data));
  }

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
          onChange={Search}
        />
      </styles.SectionSearch>
    </styles.Container>
  );
}

export default Header;
