import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programas de Salud | Undood Argentina',
  description: 'Conocé los programas de salud de Undood Argentina: odontología, oftalmología y más acciones para el bienestar integral infantil.',
  keywords: [
    'programas de salud',
    'salud infantil',
    'odontología social',
    'oftalmología solidaria',
    'undood salud'
  ],
  openGraph: {
    title: 'Programas de Salud | Undood Argentina',
    description: 'Iniciativas de salud: controles odontológicos, oftalmológicos y acompañamiento preventivo para niños en hogares.',
    url: 'https://undood.org/programs/health',
    type: 'website',
    images: [
      { url: '/health-main.png', width: 1200, height: 630, alt: 'Voluntarios en programa de salud Undood' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programas de Salud | Undood Argentina',
    description: 'Acciones de salud integral para acompañar infancias con calidad y prevención.',
    images: ['/health-main.png']
  },
  alternates: { canonical: '/programs/health' }
}

export default function HealthProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
