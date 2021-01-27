import React, { useRef } from "react";
import { AiFillLock } from "react-icons/ai";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
//
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useToast } from "../../context/toastContext";
import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import getValidationErrors from "../../utils/getValidationErrors";
import api from "../../services/api";

interface SignUpFormData {
  passwd: string;
  passwd_confirmation: string;
}

interface ParamsData {
  tokenId: string;
}

const ResetPasswd: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { tokenId } = useParams<ParamsData>();
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = async (data: SignUpFormData): Promise<void> => {
    // Unform will automatically prevent default.
    try {
      // Start cleaning errors
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        passwd: Yup.string().min(4, "Mínimo 4 digitos"),
        passwd_confirmation: Yup.string().oneOf(
          [Yup.ref("passwd")],
          "As senhas não são iguais."
        ),
      });

      await schema.validate(data, { abortEarly: false });

      await api.post("passwd/reset", {
        passwd: data.passwd,
        tokenId,
      });

      addToast({
        title: "Senha atualizada com sucesso!",
        type: "success",
      });

      setTimeout(() => {
        history.push("/");
      }, 600);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        // This is the way to set error with unform. Each key is the input name and
        // it will be set on the error var coming from the useField hook in the Comp
        formRef.current?.setErrors(errors);
      }
      addToast({
        title: "Ops, algo deu errado!",
        type: "error",
        message: "Por favor tente novamente.",
      });
    }
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        {/* Unform container */}
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Escolha uma nova senha</h1>
          <Input
            name="passwd"
            icon={AiFillLock}
            placeholder="Senha"
            type="password"
          />
          <Input
            name="passwd_confirmation"
            icon={AiFillLock}
            placeholder="Confirmar senha"
            type="password"
          />
          <Button type="submit">Resetar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ResetPasswd;
