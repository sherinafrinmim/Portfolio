import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar'


const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: {
    default: " Sherin's Portfolio ",
    template: "Sherin's Portfolio ",
  },
  description:
    'An aspiring Software Engineer with a passion for building innovative and efficient software solutions. Skilled in various programming languages and frameworks, I am dedicated to continuous learning and growth in the field of software development.',


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
          <div className='flex min-h-screen flex-col'>
            <Navbar/>
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  );
}
