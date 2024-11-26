import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";


export default function Home() {
  return (
    <div className={styles.page}>
            <Header /> 
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

      </main>
    </div>
  );
}
