"use client";

import { useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from './login.module.css';
import Image from "next/image";
import Inputmask from "inputmask";

const LoginPage = () => {
  const router = useRouter();
  const whatsappRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const whatsappMask = new Inputmask("(99) 9 9999-9999");
    if (whatsappRef.current) {
      whatsappMask.mask(whatsappRef.current);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/");
    }
  }, [router]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("O nome é obrigatório."),
    whatsapp: Yup.string()
      .matches(/^(\(\d{2}\)\s)?\d{1}\s\d{4,5}-\d{4}$/, "Número de WhatsApp inválido.")
      .required("O WhatsApp é obrigatório."),
    password: Yup.string().required("A senha é obrigatória."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      whatsapp: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        setSubmitting(true);

        const response = await axios.post("https://crescer-mong-api.vercel.app/api/auth/login", values);

        if (response.status === 200) {
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));

          const redirectTo = localStorage.getItem("redirectTo") || "/";
          router.push(redirectTo);

          localStorage.removeItem("redirectTo");

          setErrors({});
          return; // Finaliza o fluxo 
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response && err.response.status === 401) {
            setErrors({ password: "Credenciais inválidas. Verifique e tente novamente." });
          } else {
            console.error("Erro desconhecido:", err.message);
            setErrors({ password: "Erro ao tentar fazer login, verifique suas credenciais." });
          }
        } else {
          console.error("Erro inesperado:", err);
          setErrors({ password: "Erro inesperado. Tente novamente mais tarde." });
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className={styles.container}>

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
            ref={whatsappRef}
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
            {formik.isSubmitting ? "Aguarde..." : "Entrar"}
          </button>
          <a href="/register">Cadastre-se</a>
        </span>
      </form>
    </div>
  );
};

export default LoginPage;
