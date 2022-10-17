import * as styles from "./index.styles";

export const Input = ({
  register,
  type,
  name,
  placeholder,
  value,
  errorName,
  isDescription,
}) => {
  return (
    <styles.Container isDescription={isDescription}>
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
    </styles.Container>
  );
};
