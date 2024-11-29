'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Recupera o usuário de forma síncrona
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
          <Image
            className={styles.logo}
            src="/images/header-logo.png"
            alt="Next.js logo"
            width={80}
            height={50}
            priority
          />
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
