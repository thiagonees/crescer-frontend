import Image from "next/image";
import styles from "./page.module.css";
import SlideShow from "./components/Slide";
import IntroText from "./components/IntroText";


export default function Home() {

  const images = [
    "/images/slide-image-1.jpeg",
    "/images/slide-image-2.jpeg",
    "/images/slide-image-3.jpeg",
    "/images/slide-image-4.jpeg",
    "/images/slide-image-5.jpeg",


  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
        <IntroText />
          <SlideShow images={images} />
        </div>
      </main>
    </div>
  );
}
