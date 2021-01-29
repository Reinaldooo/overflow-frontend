import React, { useRef, useState } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { AiFillMail, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import * as Yup from "yup";
//
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";
import { useToast } from "../../context/toastContext";
import api from "../../services/api";

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPasswd: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const handleSubmit = async (data: ForgotPasswordFormData): Promise<void> => {
    // Unform will automatically prevent default.
    try {
      // Start cleaning errors
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email obrigatório.")
          .email("Email inválido."),
      });
      await schema.validate(data, { abortEarly: false });

      setLoading(true);
      await api.post("passwd/forgot", { email: data.email });

      addToast({
        title: "Solicitação recebida!",
        message: "Você receberá uma mensagem caso o email seja válido.",
        type: "success",
      });
      setLoading(false);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        // This is the way to set error with unform. Each key is the input name and
        // it will be set on the error var coming from the useField hook in the Comp
        formRef.current?.setErrors(errors);
      }
      setLoading(false);
      addToast({
        title: "Ops, algo está errado!",
        type: "error",
        message: "Favor verificar os dados.",
      });
    }
  };

  return (
    <S.Container>
      <S.Content>
        {/* Unform container */}
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Recuperar senha</h1>
          <Input
            name="email"
            icon={AiFillMail}
            placeholder="Email"
            type="text"
          />
          <Button type="submit" loading={loading}>
            Recuperar
          </Button>
        </Form>
        <Link to="/">
          <AiOutlineArrowLeft size={25} />
          Voltar para login
        </Link>
      </S.Content>
      <S.Background></S.Background>
    </S.Container>
  );
};

export default ForgotPasswd;
