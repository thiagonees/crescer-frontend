"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import styles from  "./register.module.css";
import Image from "next/image";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Verificar se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      // Redireciona para a página inicial caso o token de autenticação esteja presente
      router.push("/");
    }
  }, [router]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", {
        name,
        whatsapp,
        cpf,
        password,
      });

      // Redirecionar para a página de login após o registro
      router.push("/login");
    } catch (err) {
      setError("Erro ao registrar, tente novamente.");
      console.error(err);
    }
  };

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
      <form onSubmit={handleRegister} className={styles.form}>
        <h1>Cadastrar</h1>
        {error && <p className={styles.error}>{error}</p>}
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>WhatsApp</label>
          <input
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
        </div>
        <div>
          <label>CPF</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;
