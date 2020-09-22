import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  svg {
    /* While hovering on the svg, select the sibling and change it's opacity */
    &:hover {
      & + span {
        opacity: 1;
      }
    }
  }

  span {
    width: 150px;
    background-color: #71aeda;
    color: #025aa2;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;

    &::before {
      content: "";
      border-style: solid;
      border-color: #71aeda transparent;
      border-width: 8px 8px 0 8px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
