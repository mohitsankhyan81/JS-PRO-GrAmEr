import Authprovider from './auth/Authprovider';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Authprovider>
          {children}
        </Authprovider>
      </body>
    </html>
  );
}
