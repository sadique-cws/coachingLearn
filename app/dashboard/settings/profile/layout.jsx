import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile layout',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='bg-sky-600 text-white flex-1 flex px-3 py-2'>
            <h1 className='text-white text-3xl font-semibold'>Coaching App</h1>
        </nav>
        {children}</body>
    </html>
  )
}
