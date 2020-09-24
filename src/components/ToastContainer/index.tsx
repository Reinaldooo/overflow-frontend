import React from "react";
//
import { useToast } from "../../context/toastContext";
import Toast from "./Toast";

import * as S from "./styles";

const ToastContainer: React.FC = () => {
  const { toasts } = useToast();
  return (
    <S.Container>
      {toasts.map((toast) => (
        <Toast key={toast.id} type={toast.type} toast={toast} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
