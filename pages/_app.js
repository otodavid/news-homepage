import Layout from '@components/Layout';
import { Inter } from '@next/font/google';
import '../styles/globals.css';

// Googlel Fonts
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className={`${inter.variable} font-sans`}>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
