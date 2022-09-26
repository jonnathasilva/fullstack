import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.isModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: #e2e4e1;
  width: 75%;
  height: 75%;
  padding: 15px;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: #353f46;
  }
`;

export const Form = styled.form`
  height: 90%;

  button {
    text-transform: uppercase;
  }
`;
