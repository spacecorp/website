export const metadata = {
  title: 'SpaceCorp - Leading Innovation',
  description: 'SpaceCorp website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <header style={{ background: '#f0f0f0', padding: '1rem', borderBottom: '1px solid #ddd' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>SpaceCorp</h1>
        </header>
        {children}
        <footer style={{ marginTop: '2rem', padding: '2rem', background: '#f0f0f0', textAlign: 'center', borderTop: '1px solid #ddd' }}>
          <p>&copy; 2026 SpaceCorp. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
