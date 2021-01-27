import styled, { css } from "styled-components";
//
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #4f4f4f;
  border-radius: 10px;
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  color: #fff;

  ${(props) =>
    props.isErrored &&
    css`
      color: #e6505c;
      border-color: #e6505c;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #46a6e0;
      border-color: #46a6e0;
    `}

  input {
    background-color: transparent;
    flex: 1;
    border: 0;
    height: 45px;
    color: #fff;

    &::placeholder {
      color: #999;
    }
  }

  + div {
    margin-top: 10px;
  }

  svg {
    margin-right: 15px;
  }
`;

export const ErrorTooltip = styled(Tooltip)`
  margin-left: 15px;

  svg {
    margin: 0;
  }

  span {
    color: #fff;
    background-color: #e6505c;

    &::before {
      border-color: #e6505c transparent;
    }
  }
`;
