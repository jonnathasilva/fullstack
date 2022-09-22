import styled from "styled-components";

export const Container = styled.main`
  width: 93%;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 50px;
  border-bottom: 1px solid #babbb9;

  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #354046;
  }
`;

export const ContainerVehicle = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

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
  flex: 1;
  overflow-y: auto;
`;

export const Cart = styled.div`
  margin-bottom: 15px;
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

export const Info = styled.div`
  background-color: #f1f2f0;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  padding: 10px;

  .ContainerSubInfo {
    height: 70px;
    display: flex;
  }

  .ContainerSubInfo .infoCol {
    flex: 1;
  }

  .infoCol p {
    text-transform: uppercase;
    color: #8f9597;
  }

  strong {
    font-weight: 500;
    font-size: 1rem;
  }

  #description {
    flex: 1;
  }
`;

export const Buttons = styled.div`
  background-color: #f1f2f0;
  border-top: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0.25;
  padding: 10px 0;

  button {
    border: none;
    width: 140px;
    height: 50px;
    color: #eeefed;
    background-color: #45535a;
    text-transform: uppercase;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 10px;
    padding-left: 10px;
    cursor: pointer;
  }

  button svg {
    position: absolute;
    left: 10px;
  }
`;
