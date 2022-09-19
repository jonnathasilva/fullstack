import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  height: 55px;
`;

export const SectionLogo = styled.div`
  background-color: #364147;
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 3%;

  h1 {
    margin-left: 16px;
    color: #fff;
    font-weight: 400;
    font-size: 23px;
    text-transform: uppercase;
  }
`;

export const SectionSearch = styled.form`
  position: relative;
  background-color: #2a3138;
  flex: 1;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    padding: 10px;
    color: #a4a5a3;
    border: none;
  }
`;
