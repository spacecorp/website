import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ReactElement } from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ) as ReactElement,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />

          <title>Space Corp</title>
        <meta name="description" content="Cutting through the noise to design for a grounded reality." />
        <meta name="keywords" content="app development, 3d modeling, coding, game design, design and identity" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content='Space Corp' />
        <meta property="og:description" content="Cutting through the noise to design for a grounded reality." />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Space Corp" />
        <meta name="twitter:description" content="Cutting through the noise to design for a grounded reality." />

        {/* Canonical URL */}
        <link rel="canonical" href="/" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Space Corp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
