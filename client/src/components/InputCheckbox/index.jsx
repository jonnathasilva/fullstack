import * as styles from "./index.styles";

export const InputCheckbox = ({
  register,
  type,
  name,
  placeholder,
  checked,
}) => {
  return (
    <styles.Container>
      <label htmlFor={name}>{placeholder}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        defaultChecked={checked}
        {...register(`${name}`)}
      />
    </styles.Container>
  );
};
