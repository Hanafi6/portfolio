// app/layout.js
import '../../style/globals.css';
import NavbarWrapper from '../../components/NavbarWrapper';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Lacheu7',
  description: 'موقع شخصي لعرض أعمال محمود كمطوّر واجهات أمامية.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className="min-h-screen flex flex-col bg-light text-dark dark:bg-black dark:text-white">
        <NavbarWrapper />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
