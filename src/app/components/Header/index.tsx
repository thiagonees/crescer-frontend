'use client';

import React from 'react'; // Import necessário para compatibilidade
import { useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import styles from './header.module.css';
import Image from 'next/image';

type User = {
  name: string;
};

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUser(null);
    router.push('/');
  };

  useEffect(() => {
    // Atualiza o estado do usuário ao carregar ou se o localStorage mudar
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const headerContent = useMemo(() => {
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
  }, [user]); // Apenas muda quando o estado `user` muda

  return <header className={styles.header}>{headerContent}</header>;
};

export default React.memo(Header);
