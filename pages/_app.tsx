import { createGlobalStyle } from 'styled-components';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import localFont from 'next/font/local';

const spacecorpsans = localFont({
  src: [
    {
      path: '../public/fonts/SpaceCorpSansLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/SpaceCorpSansRegular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-spacecorp',
});

const typestar = localFont({
  src: [
    { path: '../public/fonts/typestarblack.woff2', weight: '900', style: 'normal' },
    { path: '../public/fonts/typestarblackitalic.woff2', weight: '900', style: 'italic' },
    { path: '../public/fonts/typestarnormal.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/typestarnormalitalic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-typestar',
});

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --font-spacecorp: ${spacecorpsans.style.fontFamily};
    --font-typestar: ${typestar.style.fontFamily};
  }

  html {
    scroll-behavior: smooth;
    background: #010101;
    color: #f7f7f7;
    overflow-y: scroll;
  scrollbar-gutter: stable;
  }



  body {
    margin: 0;
    min-height: 100vh;
    font-family: var(--font-spacecorp), sans-serif !important;
    font-weight: 400;
    background: linear-gradient(180deg, #050505 0%, #090909 100%);
    color: #f5f5f5;
  }

  h1 {
  font-family: var(--font-typestar), sans-serif;
  font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className={`${spacecorpsans.variable} ${typestar.variable}`}>
      <GlobalStyle />
      <Layout currentPath={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
