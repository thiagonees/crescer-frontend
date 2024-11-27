import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import SlideShow from "./components/Slide";


export default function Home() {

  const images = [
    "/image-1.jpg",
    "/image-2.jpg",
    "/image-3.jpg",
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.jpeg"
          alt="Next.js logo"
          width={300}
          height={200}
          priority
        />

        <div>
          <SlideShow images={images} />
        </div>
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
