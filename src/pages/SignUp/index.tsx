import React, { useRef, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiFillMail,
  AiFillLock,
  AiOutlineUser,
} from "react-icons/ai";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
//
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useToast } from "../../context/toastContext";
import logo from "../../assets/logo.svg";
import * as S from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";
import api from "../../services/api";

interface SignUpFormData {
  name: string;
  email: string;
  passwd: string;
}

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const handleSubmit = async (data: SignUpFormData): Promise<void> => {
    // Unform will automatically prevent default.
    try {
      // Start cleaning errors
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório."),
        email: Yup.string()
          .required("Email obrigatório.")
          .email("Email inválido."),
        passwd: Yup.string().min(4, "Mínimo 4 digitos"),
      });
      await schema.validate(data, { abortEarly: false });

      setLoading(true);

      await api.post("users", data);

      history.push("/");
      addToast({
        title: "Cadastro realizado com sucesso!",
        type: "success",
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        console.log(errors);
        // This is the way to set error with unform. Each key is the input name and
        // it will be set on the error var coming from the useField hook in the Comp
        formRef.current?.setErrors(errors);
      }
      setLoading(false);
      if (err.response?.status === 409) {
        addToast({
          title: "Ops, este email já está em uso!",
          type: "error",
        });
        formRef.current?.setErrors({ email: "Email indisponível." });
        return;
      }
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
          <Button type="submit" loading={loading}>
            Cadastrar
          </Button>
        </Form>
        <Link to="/">
          <AiOutlineArrowLeft size={25} />
          Voltar para login
        </Link>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
