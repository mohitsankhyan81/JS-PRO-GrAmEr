export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Headert</header>
        {children}
        <footer>Fotter</footer>
      </body>
    </html>
  );
}
