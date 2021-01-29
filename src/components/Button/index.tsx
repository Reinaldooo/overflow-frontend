import React, { ButtonHTMLAttributes } from "react";
//
import * as S from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  // React will override this type attr if it is included on props
  <S.Container type="button" disabled={loading} loading={loading} {...rest}>
    {children}
  </S.Container>
);

export default Button;
