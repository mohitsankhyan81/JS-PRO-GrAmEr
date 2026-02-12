import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>Hello</div>
        {children}
      </body>
    </html>
  );
}
