import * as C from "./index.styles";

function Input({
  register,
  type,
  name,
  placeholder,
  value,
  errorName,
  isDescription,
}) {
  return (
    <C.Container isDescription={isDescription}>
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={value}
        placeholder={placeholder}
        {...register(`${name}`)}
      />
      <p>{errorName}</p>
    </C.Container>
  );
}

export default Input;
