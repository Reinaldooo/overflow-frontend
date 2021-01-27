import styled, { keyframes } from "styled-components";
//
import signInBackground from "../../assets/sign-in-back.svg";

const fadeIn = keyframes`
from {
  transform: translateY(-20px);
  opacity: .5;
}
to {
  transform: translateY(0);
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
  max-width: 700px;
  animation: ${fadeIn} 0.3s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 30px;
      font-weight: 400;
      font-size: 20px;
    }

    a {
      color: #fff;
      display: block;
      margin-top: 20px;
      text-decoration: none;
      transition: opacity 0.5s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  > a {
    color: #fff;
    margin-top: 20px;
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

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: 85%;
`;
