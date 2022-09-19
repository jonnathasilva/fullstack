import { useContext, useState } from "react";
import { Context } from "../../context/ContexteAPI";
import * as C from "./index.styles";
import { MdOutlineWaterDrop } from "react-icons/md";

function Header() {
  const [search, setSearch] = useState();
  const { GetSearch } = useContext(Context);

  function Search(e) {
    setSearch(e.target.value);
  }

  function handleOnChange(e) {
    e.preventDefault();
    GetSearch(search);
  }

  return (
    <C.Container>
      <C.SectionLogo>
        <MdOutlineWaterDrop size={40} color={"#FFF"} />
        <h1>Fullstack</h1>
      </C.SectionLogo>
      <C.SectionSearch onSubmit={handleOnChange}>
        <label htmlFor="search">Busca por um veículo</label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="BUSCA por um veículo"
          onChange={Search}
        />
      </C.SectionSearch>
    </C.Container>
  );
}

export default Header;
