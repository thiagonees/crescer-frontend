'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '../../../context/UserContext';
import styles from './header.module.css';
import Image from 'next/image';

export default function Header() {
  const router = useRouter();
  const { user, setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUser(null);
    router.push('/');
  };

  if (!user) {
    // Enquanto o estado do usuário é carregado
    return (
      <header className={styles.header}>
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
      </header>
    );
  }

  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <span>Olá, {user.name}</span>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}
