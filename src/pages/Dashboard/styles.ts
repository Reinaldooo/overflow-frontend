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

export const Main = styled.main`
  min-height: 50vh;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  & img {
    height: 50px;
  }
`;

export const MainSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Board = styled.div`
  flex: 1 35%;
`;

export const BoardTitle = styled.span`
  text-align: center;
  display: block;
`;

export const BoardContentSolid = styled.div`
  flex: 1;
  background-color: #252728;
  border-radius: 1rem;
  min-height: 25rem;
  margin: 0.5rem;
  display: flex;
  flex: 1 35%;
`;

export const BoardContent = styled.div`
  flex: 1;
  border: 5px solid #252728;
  border-radius: 1rem;
  height: 25rem;
  margin: 0.5rem;
  display: flex;
  flex: 1 35%;
`;
