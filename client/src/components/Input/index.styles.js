import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isInput ? "row-reverse" : "column")};
  justify-content: ${(props) => (props.isInput ? "flex-end" : "normal")};
  align-items: ${(props) => (props.isInput ? "center" : "normal")};
  gap: 0 10px;
  width: ${(props) => (props.isDescription ? "100% " : "calc(100% / 2)")};
  padding: 0 5px;

  input {
    border: none;
    border-bottom: 1px solid #487b9e;
    background: transparent;
    padding: 5px;
    outline: none;
  }
  p {
    color: red;
  }
`;
