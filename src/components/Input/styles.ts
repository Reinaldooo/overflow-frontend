import styled, { css } from "styled-components";
//
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  color: #999;

  ${(props) =>
    props.isErrored &&
    css`
      color: #e6505c;
      border-color: #e6505c;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #025aa2;
      border-color: #025aa2;
    `}

  input {
    background-color: transparent;
    flex: 1;
    border: 0;
    height: 45px;
    color: #025aa2;

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
