import React, { ButtonHTMLAttributes } from "react";
//
import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  // React will override this type attr if it is included on props
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
