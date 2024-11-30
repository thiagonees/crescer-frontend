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
  const [isLoading, setIsLoading] = useState(true);
  
  // Inicializa o estado com o usuário do localStorage (se existir)
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Recupera o usuário do localStorage e atualiza o estado
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Marca que a busca do usuário foi concluída
  }, []);

  // Adiciona um listener para monitorar alterações no localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener('storage', handleStorageChange);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    // Remove o usuário e o token de autenticação do localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUser(null);
    router.replace('/'); // Redireciona para a página inicial
  };

  if (isLoading) {
    return <p>Carregando...</p>; // Exibe um texto de carregamento enquanto verifica o estado
  }

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
