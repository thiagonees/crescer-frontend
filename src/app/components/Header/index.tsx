'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './header.module.css';

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Recuperar o usuário do localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []); // Esse useEffect só será executado uma vez, no carregamento inicial

  const handleLogout = () => {
    // Limpar os dados de login (user e token) e redirecionar
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUser(null); // Garantir que o state seja limpo
    router.push('/'); // Redireciona para a página de login
  };

  return (
    <header className={styles.header}>
      {user ? (
        <div className={styles.userInfo}>
          <span>Olá, {user.name}</span>
          <button className={styles.logoutButton} onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <div className={styles.authButtons}>
          <button onClick={() => router.push('/login')}>Login</button>
          <button onClick={() => router.push('/register')}>Registrar</button>
        </div>
      )}
    </header>
  );
}
