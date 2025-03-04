import styles from "./topMenu.module.css";
import Link from "next/link";

export default function TopMenu() {
  return (
      <div className={styles.main}>
        <Link
          href="/recruteurs"
        >
          Espace recruteurs
        </Link>
        <Link
          href="/candidats"
        >
          Espace candidats
        </Link>
      </div>
  );
}
