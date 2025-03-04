import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
        <Image
            aria-hidden ="false"
            src="/foot.jpg"
            alt="Footer image"
            width={500}
            height={100}
            /*fill*/ /* Si activée, ne pas oublier de rajouter la prop "Position : relative" dans le CSS */
            priority
            /*sizes="100vw"*/  
         />
    </div>
  )
}