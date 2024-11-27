
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15510.254691785445!2d-44.47703264100048!3d-13.623439838080959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x758fe4f45d6d0b5%3A0xbbc10b6c2d23168d!2sJaborandi%2C%20BA%2C%2047655-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1732729368758!5m2!1spt-BR!2sus" 
          width="700"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
