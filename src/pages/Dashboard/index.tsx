import React from "react";
import { GoSignOut } from "react-icons/go";
//
import { useAuth } from "../../context/authContext";
import * as S from "./styles";
import logoImg from "../../assets/logo.svg";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <S.Container>
      <S.Header>
        <img src={logoImg} alt="Overflow" />
        <S.UserDetails>
          <img
            src="https://avatars.githubusercontent.com/u/30397123?s=460&u=4a2634462d3e61c7c498c9c05eb973c3beab69b7&v=4"
            alt="Reinaldo Trindade"
          />
          <span>Olá, Reinaldo</span>
          <button type="button" onClick={() => signOut()}>
            <GoSignOut size={25} />
          </button>
        </S.UserDetails>
      </S.Header>
    </S.Container>
  );
};

export default Dashboard;
