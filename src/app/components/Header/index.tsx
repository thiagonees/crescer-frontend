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
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    }
    return null;
  });

  useEffect(() => {
    // Atualiza o estado com qualquer mudança no localStorage (precaução)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUser(null);
    router.push('/');
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
