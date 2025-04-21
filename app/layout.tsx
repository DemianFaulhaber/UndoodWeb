import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";


export const metadata: Metadata = {
  title: "Undood",
  description: "Undood Argentina es una asociación civil de jóvenes que acompaña a hogares con niños, niñas y adolescentes en situación de vulnerabilidad, generando impacto social a través del voluntariado.",
  keywords: [
    "voluntariado juvenil",
    "organización sin fines de lucro",
    "asociación civil",
    "impacto social",
    "ayuda a la infancia",
    "niños en situación vulnerable",
    "voluntariado en hogares",
    "solidaridad social",
    "organización juvenil",
    "voluntariado con niños",
    "acción social",
    "trabajo comunitario",
    "niñez en riesgo",
    "ONG juvenil",
    "participación solidaria"
  ],
  openGraph: {
    title: "Undood",
    description:
      "Somos una asociación civil de jóvenes que genera impacto social a través del voluntariado en hogares con niños y adolescentes.",
    url: "https://undood.org",
    siteName: "Undood",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Undood",
    description:
      "Generamos impacto social acompañando hogares con niños y adolescentes en situación de vulnerabilidad.",
  },
  metadataBase: new URL("https://undood.org"),
  alternates: {
    canonical: "/",
  },
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
