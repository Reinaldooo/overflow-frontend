import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
//
import logo from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <form action="">
          <h1>Faça seu login</h1>
          <input placeholder="Email" type="text" />
          <input placeholder="Senha" type="password" />
          <button type="submit">Entrar</button>
          <a href="/">Esqueci a senha</a>
        </form>
        <a href="/">
          <AiOutlineLogin size={25} />
          Criar conta
        </a>
      </Content>
      <Background></Background>
    </Container>
  );
};

export default SignIn;
