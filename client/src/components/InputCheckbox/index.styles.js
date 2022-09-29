import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  width: calc(100% / 2);
  padding: 0 5px;

  input[type="checkbox"] {
    position: relative;
    width: 40px;
    height: 15px;
    outline: none;
    -webkit-appearance: none;
    display: inline-block;
    background-color: #a8a9a7;
    border-radius: 40px;
    cursor: pointer;
  }

  input:checked[type="checkbox"] {
    background-color: #49886e;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: -2px;
    left: 0;
    background-color: #fafafa;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transform: scale(1.2);
    transition: 0.5s;
    cursor: pointer;
  }

  input:checked[type="checkbox"]::before {
    left: 23px;
  }
`;
