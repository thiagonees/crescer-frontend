import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import SlideShow from "./components/Slide";


export default function Home() {

  const images = [
    "/images/slide-image-1.jpeg",
    "/images/slide-image-2.jpeg",


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
