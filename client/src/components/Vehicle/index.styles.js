import styled from "styled-components";

export const Vehicle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 35px;

  h3 {
    color: #354046;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 1rem;
  }
`;

export const AllVehicle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
  max-height: 480px;

  ::-webkit-scrollbar {
    width: 5px;
    overflow: auto;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-track {
    background-color: #aaa;
  }
`;

export const Cart = styled.div`
  padding: 10px;
  background-color: #ffffff;

  :hover {
    opacity: 0.5;
  }

  h4 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  div p {
    color: #49886e;
    font-size: 1rem;
  }

  div + p {
    color: #798083;
    font-size: 1rem;
  }
`;
