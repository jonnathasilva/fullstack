import * as C from "./index.styles";

function InputCheckbox({ register, type, name, placeholder, checked }) {
  return (
    <C.Container>
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultChecked={checked}
        {...register(`${name}`)}
      />
    </C.Container>
  );
}

export default InputCheckbox;
