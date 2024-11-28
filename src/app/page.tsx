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
        <div>
          <SlideShow images={images} />
        </div>
      </main>
    </div>
  );
}
