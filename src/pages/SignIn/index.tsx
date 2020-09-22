import React from "react";
import { Form } from "@unform/web";
import { AiOutlineLogin, AiFillMail, AiFillLock } from "react-icons/ai";
//
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => {
  const handleSubmit = (data: object): void => {
    // Unforma will automatically prevent default.
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        {/* Unform container */}
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input
            name="email"
            icon={AiFillMail}
            placeholder="Email"
            type="text"
          />
          <Input
            name="passwd"
            icon={AiFillLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Entrar</Button>
          <a href="/">Esqueci a senha</a>
        </Form>
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
