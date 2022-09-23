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
