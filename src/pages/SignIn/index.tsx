import React, { useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { AiOutlineLogin, AiFillMail, AiFillLock } from "react-icons/ai";
import * as Yup from "yup";
//
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../hooks/authContext";

interface SignInForm {
  email: string;
  passwd: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const handleSubmit = async (data: SignInForm): Promise<void> => {
    // Unform will automatically prevent default.
    try {
      // Start with a clean state
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email obrigatório.")
          .email("Email inválido."),
        passwd: Yup.string().required("Senha obrigatória"),
      });
      await schema.validate(data, { abortEarly: false });

      signIn({
        email: data.email,
        passwd: data.passwd,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      // This is the way to set error with unform. Each key is the input name and
      // it will be set on the error var coming from the useField hook in the Comp
      formRef.current?.setErrors(errors);
    }
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        {/* Unform container */}
        <Form ref={formRef} onSubmit={handleSubmit}>
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
