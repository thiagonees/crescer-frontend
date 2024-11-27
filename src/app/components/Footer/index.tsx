import styles from "./footer.module.css"
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
        Fale conosco
      </a>

      <a
        href="/testimonials"
        rel="noopener noreferrer"
      >
        Testemunhos
      </a>
    </footer>
  );
}
