'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import styles from './header.module.css';
import Image from 'next/image';

type User = {
  name: string;
};

export default function Header() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento inicial
  const [user, setUser] = useState<User | null>(null); // Estado do usuário

  // Atualiza o estado com o usuário salvo no localStorage ao montar o componente
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    console.log('Usuário recuperado do localStorage:', storedUser); // Debug
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Define que o carregamento terminou
  }, []);

  // Sincroniza mudanças no localStorage dinamicamente
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem('user');
      console.log('Alteração detectada no localStorage:', storedUser); // Debug
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Função de logout
  const handleLogout = () => {
    console.log('Fazendo logout...');
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUser(null);
    router.replace('/'); // Redireciona para a página inicial
  };

  return (
    <header className={styles.header}>
      {isLoading ? (
        // Exibe um estado de carregamento enquanto verifica o usuário
        <p>Carregando...</p>
      ) : user ? (
        // Exibe informações do usuário e botão de logout se o usuário estiver autenticado
        <div className={styles.userInfo}>
          <span>Olá, {user.name}</span>
          <button className={styles.logoutButton} onClick={handleLogout}>
            Sair
          </button>
        </div>
      ) : (
        // Exibe botões de login/registro se o usuário não estiver autenticado
        <div className={styles.authButtons}>
          <button onClick={() => router.push('/login')}>Login</button>
          <button onClick={() => router.push('/register')}>Registrar</button>
          <Image
            className={styles.logo}
            src="/images/header-logo.png"
            alt="Next.js logo"
            width={80}
            height={50}
            priority
          />
        </div>
      )}
    </header>
  );
}
