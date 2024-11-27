"use client";

import { ClipLoader } from "react-spinners"; //
import { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import Inputmask from "inputmask";
import toast, { Toaster } from "react-hot-toast"; // Importando o toast e Toaster
import styles from "./register.module.css";
import Image from "next/image";

// Validação com Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Nome é obrigatório"),
  whatsapp: Yup.string()
    .matches(/^(\(\d{2}\)\s)?\d{1}\s\d{4,5}-\d{4}$/, "Número de WhatsApp inválido")
    .required("WhatsApp é obrigatório"),
  cpf: Yup.string()
    .matches(/\d{3}\.\d{3}\.\d{3}-\d{2}/, "CPF inválido")
    .required("CPF é obrigatório"),
  password: Yup.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
});

const RegisterPage = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento
  const router = useRouter();

  // Referências para os campos de entrada
  const whatsappRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);

  // Aplicando as máscaras quando o componente for montado
  useEffect(() => {
    const whatsappMask = new Inputmask("(99) 9 9999-9999");
    const cpfMask = new Inputmask("999.999.999-99");

    if (whatsappRef.current) {
      whatsappMask.mask(whatsappRef.current);
    }
    if (cpfRef.current) {
      cpfMask.mask(cpfRef.current);
    }
  }, []);

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      name: "",
      whatsapp: "",
      cpf: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true); // Inicia o loading

      try {
        const response = await axios.post("http://localhost:3000/api/auth/register", values);

        toast.success("Cadastro realizado com sucesso!", {
          duration: 4000,
        });

        // Aguarda 2 segundos antes de redirecionar para a página de login
        setTimeout(() => {
          router.push("/login");
        }, 2000);

      } catch (err) {
        toast.error("Erro ao realizar o cadastro!", {
          duration: 3000,
        });
        console.error(err);
      } finally {
        setTimeout(() => setIsLoading(false), 2000); 
      }
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      router.push("/");
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <Image
        className={styles.logo}
        src="/logo.jpeg"
        alt="Next.js logo"
        width={300}
        height={250}
        priority
      />
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h1>Cadastrar</h1>
        {error && <p className={styles.error}>{error}</p>}
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
          <label>CPF</label>
          <input
            ref={cpfRef}
            type="text"
            name="cpf"
            value={formik.values.cpf}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
          />
          {formik.touched.cpf && formik.errors.cpf && (
            <p className={styles.error}>{formik.errors.cpf}</p>
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
        <button
          type="submit"
          className={isLoading ? styles.disabled : ''}
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader color="#ffffff" size={20} /> : "Cadastrar"}
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default RegisterPage;
