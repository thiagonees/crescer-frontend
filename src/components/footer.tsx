import styles from "../app/page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="/"
        rel="noopener noreferrer"
      >
        Inicio
      </a>
      <a href="/about" rel="noopener noreferrer">
        Sobre nós
      </a>
      <a
        href="/contact"
        rel="noopener noreferrer"
      >
        Fale com a gente
      </a>
    </footer>
  );
}
