import type { Metadata } from "next";
import "./globals.css";
import TopMenu from "./ui/topMenu/topMenu";
import Footer from "./ui/footer/footer";

export const metadata: Metadata = {
  title: "NextJob",
  description: "Le meilleur choix avant d'en faire un",
};

export default function RootLayout ({ children }: Readonly < { children: React.ReactNode } >) {
  return (
    <html lang="en">
      <body>
        <TopMenu/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
