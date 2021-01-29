import React, { ButtonHTMLAttributes } from "react";
//
import * as S from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  // React will override this type attr if it is included on props
  <S.Container type="button" {...rest}>
    {children}
  </S.Container>
);

export default Button;
