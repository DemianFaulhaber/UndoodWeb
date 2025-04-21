import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";


export const metadata: Metadata = {
  title: "Undood",
  description: "Undood Argentina es una asociación civil de jóvenes que acompaña a hogares con niños, niñas y adolescentes en situación de vulnerabilidad, generando impacto social a través del voluntariado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="content">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
