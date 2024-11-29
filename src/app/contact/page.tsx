
import Image from 'next/image';
import styles from './contact.module.css';


export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entre em Contato</h1>
      <div className={styles.icons}>
        <a
          href="https://wa.me/+5577999493842"
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

      <a href='/message'>Cadastre-se ou faca login para enviar uma mensagem</a>
      <span>Avenida Francisco Moreira Alves. Centro, ao lado da praça da tia jarda, Crescer. Jaborandi Bahia.</span>

      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.6242641441104!2d-44.47336085667257!3d-13.61974519350075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x758ff26cee344c1%3A0x7fc606151fd2bdf3!2sAv.%20Francisco%20Moreira%20Alves%2C%20Jaborandi%20-%20BA%2C%2047655-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1732819456421!5m2!1spt-BR!2sus"
          width="700"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
