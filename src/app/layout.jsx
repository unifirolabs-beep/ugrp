import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const liberation = localFont({
  src: [
    { path: "../../public/fonts/LiberationSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/LiberationSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-liberation-local",
  display: "swap",
});
const dejavu = localFont({
  src: "../../public/fonts/DejaVuSansMono-Bold.ttf",
  weight: "700",
  variable: "--font-dejavu-local",
  display: "swap",
});

export const metadata = {
  title: "The U Group",
  description: "The U Group",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${liberation.variable} ${dejavu.variable} h-full scroll-smooth antialiased motion-reduce:scroll-auto`}
    >
      <body className="flex min-h-full flex-col bg-[#f6f4f0] font-liberation text-[#16181a] [&_:focus-visible]:outline-2 [&_:focus-visible]:outline-offset-[5px] [&_:focus-visible]:outline-[#89651d]">
        <a className="fixed top-2.5 left-2.5 z-100 -translate-y-[160%] bg-[#16181a] px-[18px] py-3 text-white focus:translate-y-0" href="#main-content">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
