"use client";

import { useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from './login.module.css'; // Importa o CSS
import Image from "next/image";
import Inputmask from "inputmask"; // Importa o Inputmask

const LoginPage = () => {
  const router = useRouter();

  // Referência para o campo de WhatsApp
  const whatsappRef = useRef<HTMLInputElement>(null);

  // Aplicar a máscara no campo de WhatsApp
  useEffect(() => {
    const whatsappMask = new Inputmask("(99) 9 9999-9999");
    
    if (whatsappRef.current) {
      whatsappMask.mask(whatsappRef.current);
    }
  }, []);

  // Verificar se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      // Redireciona para a página inicial caso o token de autenticação esteja presente
      router.push("/");
    }
  }, [router]);

  // Validação com Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório."),
    whatsapp: Yup.string()
      .matches(/^(\(\d{2}\)\s)?\d{1}\s\d{4,5}-\d{4}$/, "Número de WhatsApp inválido.")
      .required("O WhatsApp é obrigatório."),
    password: Yup.string().required("A senha é obrigatória."),
  });

  // Formik para gerenciar o formulário
  const formik = useFormik({
    initialValues: {
      name: "",
      whatsapp: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await axios.post("http://localhost:3000/api/auth/login", values);

        // Armazenar o token e os dados do usuário no localStorage
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Redirecionar para a página principal ou dashboard
        router.push("/");
      } catch (err) {
        setErrors({ password: "Erro ao fazer login, verifique suas credenciais." });
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/logo.jpeg"
        alt="Next.js logo"
        width={300}
        height={200}
        priority
      />
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <div>
          <label>Nome</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.name && formik.errors.name && (
            <p className={styles.error}>{formik.errors.name}</p>
          )}
        </div>
        <div>
          <label>WhatsApp</label>
          <input
            ref={whatsappRef} // Referência para aplicar a máscara
            type="text"
            name="whatsapp"
            value={formik.values.whatsapp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.whatsapp && formik.errors.whatsapp && (
            <p className={styles.error}>{formik.errors.whatsapp}</p>
          )}
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.password && formik.errors.password && (
            <p className={styles.error}>{formik.errors.password}</p>
          )}
        </div>
        <span className={styles.registerButton}>
        <button type="submit" disabled={formik.isSubmitting}>
          Entrar
        </button>
        <a href="/register">Cadastre-se</a>
        </span>
      </form>
    </div>
  );
};

export default LoginPage;
