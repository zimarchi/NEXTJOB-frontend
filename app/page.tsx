import Image from "next/image";
import styles from "./page.module.css";


export default function HomePage() {
  return (
      <main className={styles.main}>
        <span> Extrait de code <code>grid-row-start</code> </span>
        <Image
          className={styles.responsive}
          src="/job.jpg"
          alt="Image du job de tes rêves"
          width={530}
          height={380}
          priority
        />
      </main>
  );
}
