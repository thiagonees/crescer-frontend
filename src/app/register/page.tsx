"use client";

import { ClipLoader } from "react-spinners";
import { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import Inputmask from "inputmask";
import toast, { Toaster } from "react-hot-toast";
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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Referências para os campos de entrada
  const whatsappRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);

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
      setIsLoading(true);

      try {
        const response = await axios.post("https://crescer-mong-api.vercel.app/api/auth/register", values);
      
        toast.success("Cadastro realizado com sucesso!", {
          duration: 4000,
        });
      
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } catch (err: unknown) {
        // Type guard para verificar se err é um objeto com response
        if (
          typeof err === "object" &&
          err !== null &&
          "response" in err &&
          typeof (err as any).response === "object" &&
          "data" in (err as any).response &&
          typeof (err as any).response.data === "object"
        ) {
          const responseError = (err as any).response.data;
          if (responseError.error) {
            toast.error(responseError.error, {
              duration: 3000,
            });
          } else {
            toast.error("Erro ao realizar o cadastro!", {
              duration: 3000,
            });
          }
        } else {
          toast.error("Erro inesperado!", {
            duration: 3000,
          });
        }
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
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <h1>Cadastrar</h1>
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
        <span className={styles.registerButton}>
        <button
          type="submit"
          className={isLoading ? styles.disabled : ""}
          disabled={isLoading}
        >
          {isLoading ? <ClipLoader color="#ffffff" size={20} /> : "Cadastrar"}
          </button>
        <a href="/login">Login</a>
        </span>
      </form>
      <Toaster />
    </div>
  );
};

export default RegisterPage;
