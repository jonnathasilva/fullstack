import * as C from "./index.styles";

function Input({
  register,
  type,
  name,
  placeholder,
  value,
  errorName,
  isInputs,
  isDescription,
  checked,
}) {
  return (
    <C.Container isInput={isInputs} isDescription={isDescription}>
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={value}
        placeholder={placeholder}
        defaultChecked={checked}
        {...register(`${name}`)}
      />
      <p>{errorName}</p>
    </C.Container>
  );
}

export default Input;
