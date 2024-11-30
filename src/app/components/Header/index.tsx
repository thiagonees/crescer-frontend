'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import styles from './header.module.css';
import Image from 'next/image';

type User = {
  name: string;
};

const Header = () => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Estado para indicar o carregamento

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUser(null);
    router.push('/');
  };

  useEffect(() => {
    // Simula o carregamento do usuário
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Conclui o carregamento
  }, []);

  const headerContent = useMemo(() => {
    if (isLoading) {
      // Exibe um placeholder ou nada enquanto está carregando
      return <div className={styles.placeholder}>Carregando...</div>;
    }

    return user ? (
      <div className={styles.userInfo}>
        <span>Olá, {user.name}</span>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Sair
        </button>
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
    );
  }, [isLoading, user]); // Recalcula apenas se `isLoading` ou `user` mudar

  return <header className={styles.header}>{headerContent}</header>;
};

export default React.memo(Header);
