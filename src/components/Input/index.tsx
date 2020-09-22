import React, { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import { IconBaseProps } from "react-icons";
import { FiAlertTriangle } from "react-icons/fi";
import { useField } from "@unform/core";
//
import { Container, ErrorTooltip } from "./styles";

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
    <Container isFocused={isFocused} isErrored={!!error}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && (
        <ErrorTooltip title={error}>
          <FiAlertTriangle size={20} />
        </ErrorTooltip>
      )}
    </Container>
  );
};

export default Input;
