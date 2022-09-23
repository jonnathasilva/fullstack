import * as C from "./index.styles";

function Input({ type, name, placeholder, onChange, value }) {
  return (
    <C.Container>
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </C.Container>
  );
}

export default Input;
