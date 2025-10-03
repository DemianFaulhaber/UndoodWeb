import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Undood Argentina',
    default: 'Colaborar - Undood Argentina'
  },
  description: 'Descubrí las diferentes formas de colaborar con Undood Argentina. Doná, convertite en sponsor o sumate como voluntario para transformar la realidad de niños en situación de vulnerabilidad.',
  keywords: 'colaborar, donar, voluntario, sponsor, Undood, Argentina, niños, ONG, impacto social, transformación social',
  openGraph: {
    title: 'Colaborar con Undood Argentina',
    description: 'Transformar realidades es un trabajo en conjunto. Encontrá tu forma de ser parte del cambio.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Undood Argentina'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colaborar con Undood Argentina',
    description: 'Transformar realidades es un trabajo en conjunto. Encontrá tu forma de ser parte del cambio.',
  }
}

export default function CollaborateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
