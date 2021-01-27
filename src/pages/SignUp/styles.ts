import styled, { keyframes } from "styled-components";
//

const fadeIn = keyframes`
from {
  opacity: .2;
}
to {
  opacity: 1;
}
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  animation: ${fadeIn} 0.5s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 30px;
      font-weight: 400;
      font-size: 20px;
    }
  }

  > a {
    color: #fff;
    margin-top: -20px;
    text-decoration: none;
    transition: opacity 0.5s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
    &:hover {
      opacity: 0.6;
    }
  }

  > img {
    height: 80px;
  }
`;
