import React from "react";
import { FiAlertTriangle, FiXCircle } from "react-icons/fi";

import * as S from "./styles";

const ToastContainer: React.FC = () => {
  return (
    <S.Container>
      <S.Toast>
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login</p>
        </div>
        <button type="button">
          <FiXCircle size={20} />
        </button>
      </S.Toast>
      <S.Toast type="error">
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login</p>
        </div>
        <button type="button">
          <FiXCircle size={20} />
        </button>
      </S.Toast>
      <S.Toast type="success">
        <FiAlertTriangle size={20} />
        <div>
          <strong>Aconteceu um erro</strong>
        </div>
        <button type="button">
          <FiXCircle size={20} />
        </button>
      </S.Toast>
    </S.Container>
  );
};

export default ToastContainer;
