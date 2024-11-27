
import Image from 'next/image';
import styles from './contact.module.css'; // CSS Modules

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entre em Contato</h1>

      <div className={styles.icons}>
        <a
          href="https://wa.me/SeuNumeroAqui"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
        >
          <Image
            src="/whatsapp.svg"
            alt="Next.js logo"
            width={40}
            height={40}
            priority
          />
        </a>
        <a
          href="https://www.instagram.com/crescer.edi?igsh=cjU4NTdpbzZ6YTY5"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconButton}
        >
          <Image
            src="/instagram.svg"
            alt="Next.js logo"
            width={40}
            height={40}
            priority
          />
        </a>
      </div>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
