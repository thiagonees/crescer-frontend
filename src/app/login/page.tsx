// src/app/login/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginData {
  name: string;
  whatsapp: string;
  password: string;
}

export default function LoginPage() {
  const [loginData, setLoginData] = useState<LoginData>({
    name: '',
    whatsapp: '',
    password: ''
  });

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, whatsapp, password } = loginData;

    // Validação dos campos
    if (!name || !whatsapp || !password) {
      setError('Nome, WhatsApp e Senha são obrigatórios!');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess('Login realizado com sucesso!');
        localStorage.setItem('token', data.token); // Armazena o token no localStorage
        setTimeout(() => router.push('/'), 2000); // Redirecionar para a home após o login
      } else {
        const data = await response.json();
        setError(data.error || 'Erro ao fazer login, tente novamente.');
      }
    } catch (error) {
      setError('Erro ao enviar a requisição.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={loginData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="whatsapp"
          placeholder="WhatsApp"
          value={loginData.whatsapp}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <p>Não tem uma conta? <a href="/register">Registrar</a></p>
    </div>
  );
}
