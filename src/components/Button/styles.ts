import styled from "styled-components";

export const Container = styled.button`
  background-color: #71aeda;
  color: #025aa2;
  border-radius: 10px;
  border: 2px solid transparent;
  /* width: 100%; */
  padding: 15px 15px;
  margin-top: 15px;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.75;
  }
`;
