import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Image
          className={styles.logo}
          src="/logo.jpeg"
          alt="Next.js logo"
          width={300}
          height={250}
          priority
        />
        {/* <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> */}

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/login"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <a
            href="/register"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
           Registrar
          </a>
        </div>
      </main>u
    </div>
  );
}
