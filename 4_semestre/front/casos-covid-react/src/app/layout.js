import './geral.css'

export const metadata = {
  title: 'Casos de covid',
  description: 'Monitoramento de casos de covid por Estados',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='corpo'>{children}</body>
    </html>
  )
}
