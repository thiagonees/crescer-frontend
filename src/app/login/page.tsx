'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import styles from './login.module.css'; // Importa o CSS
import Image from "next/image";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        name,
        whatsapp,
        password,
      });

      // Armazenar o token e os dados do usuário no localStorage
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirecionar para a página principal ou dashboard
      router.push("/");
    } catch (err) {
      setError("Erro ao fazer login, verifique suas credenciais.");
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
      <form onSubmit={handleLogin} className={styles.form}>
        <h1>Login</h1>
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

export default LoginPage;
