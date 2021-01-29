import styled, { keyframes, css } from "styled-components";

interface ButtonProps {
  loading?: boolean;
}

const wiggle = keyframes`
0% {
  transform: rotate(0deg);
}
25% {
  transform: rotate(3deg);
}
75% {
  transform: rotate(-3deg);
}
100% {
  transform: rotate(0deg);
}
`;

export const Container = styled.button<ButtonProps>`
  animation: ${(props) =>
    props.loading
      ? css`
          ${wiggle} 0.4s infinite
        `
      : null};
  background-color: #46a6e0;
  color: #fff;
  border-radius: 10px;
  border: 2px solid transparent;
  /* width: 100%; */
  padding: 15px 15px;
  margin-top: 15px;
  transition: opacity 0.5s;
  opacity: ${(props) => (props.disabled ? 0.75 : 1)};

  &:hover {
    opacity: 0.75;
  }
`;
