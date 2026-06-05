import { createGlobalStyle } from "styled-components";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background: #010101;
    color: #f7f7f7;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: linear-gradient(180deg, #050505 0%, #090909 100%);
    color: #f5f5f5;
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
    <>
      <GlobalStyle />
      <Layout currentPath={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
