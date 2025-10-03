import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Undood Argentina | Asociación Civil Juvenil",
  description: "Conocé más sobre Undood Argentina: una Asociación Civil de jóvenes de 16 a 30 años que acompaña a +10 hogares de niños en situación de vulnerabilidad familiar. Descubrí nuestro equipo y misión.",
  keywords: [
    "sobre undood argentina",
    "equipo undood",
    "asociación civil juvenil",
    "voluntarios undood",
    "quiénes somos undood",
    "fundadores undood argentina",
    "organización juvenil argentina",
    "voluntariado con niños",
    "hogares transitorios",
    "vulnerabilidad familiar",
    "jóvenes solidarios",
    "impacto social juventud"
  ],
  openGraph: {
    title: "Sobre Nosotros - Undood Argentina",
    description: "Asociación Civil de jóvenes que acompaña a +10 hogares de niños en situación de vulnerabilidad. Conocé nuestro equipo y misión.",
    url: "https://undood.org/about",
    type: "website",
    images: [
      {
        url: "/team.jpg",
        width: 1200,
        height: 630,
        alt: "Equipo de voluntarios de Undood Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros - Undood Argentina",
    description: "Conocé al equipo de jóvenes que trabaja para transformar realidades infantiles.",
    images: ["/team.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
