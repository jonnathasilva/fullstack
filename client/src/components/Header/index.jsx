import { useState } from "react";
import * as styles from "./index.styles";
import { MdOutlineWaterDrop } from "react-icons/md";

import api from "../../api";

function Header() {
  const [search, setSearch] = useState();
  const { getSearch } = api();

  function Search(e) {
    setSearch(e.target.value);
  }

  function handleOnChange(e) {
    e.preventDefault();
    getSearch(search);
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
