import * as C from "./index.styles";

function Input({ register, type, name, placeholder, value, errorName }) {
  return (
    <C.Container>
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        {...register(`${name}`)}
      />
      <p>{errorName}</p>
    </C.Container>
  );
}

export default Input;
