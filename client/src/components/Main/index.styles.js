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
