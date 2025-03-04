"use client"

import styles from "./topMenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopMenu() {

  const pathname = usePathname ()

  return (
      <div className={styles.main}>
        <Link
          href="/recruteurs"
          style={{backgroundColor: pathname==="/recruteurs" ? "red": "transparent"}}
        >
          Espace recruteurs
        </Link>
        <Link
          href="/candidats"
          style={{backgroundColor: pathname==="/candidats" ? "red": "transparent"}}
        >
          Espace candidats
        </Link>
      </div>
  );
}
