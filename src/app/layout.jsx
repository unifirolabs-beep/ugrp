import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "The U Group",
  description: "The U Group",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
