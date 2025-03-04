"use client"

import { usePathname } from "next/navigation";

export default function Recruteurs() {

  const pathname = usePathname()

  return (
    <>
      <h1>{pathname}</h1>
    </>
  );
}
