"use client"

import { usePathname } from "next/navigation";

export default function Candidats() {

  const pathname = usePathname() 

  const pathTitle= pathname[1].toUpperCase() + pathname.slice(2);

  return (
    <>
      <h1>Espace {pathTitle}</h1>
    </>
  );
}
