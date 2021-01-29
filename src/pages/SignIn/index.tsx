import React, { useState, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { AiOutlineLogin, AiFillMail, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as Yup from "yup";
//
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/logo.svg";
import * as S from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../context/authContext";
import { useToast } from "../../context/toastContext";

interface SignInForm {
  email: string;
  passwd: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const handleSubmit = async (data: SignInForm): Promise<void> => {
    // Unform will automatically prevent default.
    try {
      // Start cleaning errors
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email obrigatório.")
          .email("Email inválido."),
        passwd: Yup.string().required("Senha obrigatória"),
      });

      await schema.validate(data, { abortEarly: false });

      setLoading(true);
      await signIn({
        email: data.email,
        passwd: data.passwd,
      });

      addToast({
        title: "Bem-vindo!",
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        // This is the way to set error with unform. Each key is the input name and
        // it will be set on the error var coming from the useField hook in the Comp
        formRef.current?.setErrors(errors);
      }
      setLoading(false);
      addToast({
        title: "Ops, algo deu errado!",
        type: "error",
        message: "Por favor tente novamente.",
      });
    }
  };

  return (
    <S.Container>
      <S.Content>
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
          <Button type="submit" loading={loading}>
            Entrar
          </Button>
          <Link to="/passwd-forgot">Esqueci a senha</Link>
        </Form>
        <Link to="/signup">
          <AiOutlineLogin size={25} />
          Criar conta
        </Link>
      </S.Content>
      <S.Background></S.Background>
    </S.Container>
  );
};

export default SignIn;
