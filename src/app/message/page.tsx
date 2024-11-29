"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import styles from "./sendMessage.module.css"; 
import PrivateRoute from "../components/PrivateRoute";

interface UserData {
  _id: string;
  name: string;
  whatsapp: string;
  cpf: string;
}

// Esquema de validação com Yup
const validationSchema = Yup.object({
  message: Yup.string()
    .required("A mensagem é obrigatória")
    .min(5, "A mensagem deve ter pelo menos 5 caracteres"),
});

const SendMessagePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  // Hook para buscar os dados do usuário
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login"); 
      return;
    }

    const user = localStorage.getItem("user");
    if (user) {
      try {
        setUserData(JSON.parse(user)); // Atualiza os dados do usuário no estado
      } catch (error) {
        toast.error("Erro ao processar dados do usuário no localStorage");
        console.error(error);
        router.push("/login");
      }
    } else {
      toast.error("Dados do usuário não encontrados no localStorage");
      router.push("/login");
    }
  }, [router]);

  // Configuração do Formik
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (!userData) {
        toast.error("Usuário não encontrado!");
        return;
      }
    
      setIsLoading(true);
    
      try {
        const token = localStorage.getItem("authToken"); 
        if (!token) {
          toast.error("Token de autenticação não encontrado");
          router.push("/login"); 
          return;
        }
    
        const response = await axios.post(
          "https://crescer-mong-api.vercel.app/api/auth/contact",
          {
            message: values.message,
            userId: userData._id, 
            name: userData.name, 
            whatsapp: userData.whatsapp,
            cpf: userData.cpf,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
    
        toast.success("Mensagem enviada com sucesso!");
        formik.resetForm();
      } catch (error) {
        toast.error("Erro ao enviar mensagem");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <PrivateRoute>
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h1>Enviar Mensagem</h1>
        <div>
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.message && formik.errors.message && (
            <p className={styles.error}>{formik.errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className={isLoading ? styles.disabled : ""}
          disabled={isLoading}
        >
          {isLoading ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>
      <Toaster />
    </div>
    </PrivateRoute>
  );
};

export default SendMessagePage;
