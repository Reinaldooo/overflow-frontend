import React, { useCallback, useRef } from "react";
import {
  AiOutlineArrowLeft,
  AiFillMail,
  AiFillLock,
  AiOutlineUser,
} from "react-icons/ai";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
//
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = async (data: object): Promise<void> => {
    // Unform will automatically prevent default.
    try {
      // Start with a clean state
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório."),
        email: Yup.string()
          .required("Email obrigatório.")
          .email("Email inválido."),
        passwd: Yup.string().min(4, "Mínimo 4 digitos"),
      });
      await schema.validate(data, { abortEarly: false });
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
          <h1>Faça seu cadastro</h1>
          <Input
            name="name"
            icon={AiOutlineUser}
            placeholder="Nome"
            type="text"
          />
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
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="/">
          <AiOutlineArrowLeft size={25} />
          Voltar para login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
