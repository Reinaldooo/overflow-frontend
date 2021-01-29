import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 3.5rem;
  align-items: center;
`;

export const Header = styled.header`
  flex: 1;
  display: flex;
  margin: 0 auto 2rem;
  & img {
    height: 50px;
  }
`;

export const UserDetails = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  & img {
    height: 40px;
    border-radius: 50%;
  }
  & span {
    margin-left: 1rem;
    font-size: 18px;
  }
  & button {
    display: flex;
    margin: 0;
    border: 0;
    background-color: transparent;
    color: #46a6e0;
  }
  & svg {
    margin-left: 1rem;
  }
`;
