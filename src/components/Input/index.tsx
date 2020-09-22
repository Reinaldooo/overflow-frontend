import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";
//
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, name, ...rest }) => {
  const [isFocused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    // Unform setup
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error}
    </Container>
  );
};

export default Input;
