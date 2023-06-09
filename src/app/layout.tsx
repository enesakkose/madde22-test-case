import '../styles/globals.scss'
import { Galano } from '@/assets/fonts/Galano'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Galano.className}>{children}</body>
    </html>
  )
}
