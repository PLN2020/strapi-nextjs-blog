import Navbar from '../components/navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        {/*
            <head /> will contain the components returned by the nearest parent
            head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
        */}
        <head />
        <body className='bg-[#f9f8f6]'>
            <Navbar />
            <div>{children}</div>
        </body>
    </html>
  )
}
