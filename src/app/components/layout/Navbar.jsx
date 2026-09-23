import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-[123px] max-[901px]:h-auto w-full bg-[#f6f4f0]">
      <nav className="relative mx-auto flex h-full w-full max-w-[1040px] items-center justify-between px-5 max-[901px]:min-h-[140px] max-[901px]:flex-wrap max-[901px]:justify-center max-[901px]:gap-5 max-[901px]:pt-[100px] max-[901px]:pb-5">

        {/* Left navigation */}
        <div className="flex items-center gap-[48px] max-[901px]:gap-5 max-[421px]:gap-3.5">
          <a
            href="/about"
            className="whitespace-nowrap font-liberation text-[15px] max-[421px]:text-[12px] font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            About Us
          </a>

          <a
            href="#"
            className="whitespace-nowrap font-liberation text-[15px] max-[421px]:text-[12px] font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            Intelligent Capital Advisory
          </a>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 max-[901px]:top-[45px] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <Link href="/">
          <Image
            src="/images/navbar/logo.png"
            alt="The U Group"
            className="h-[60px] w-[76px] object-contain"
            width={76}
            height={60}
            priority
          />
          </Link>
        </div>

        {/* Right navigation */}
        <div className="flex items-center gap-[40px] max-[901px]:gap-5 max-[421px]:gap-3.5">
          <a
            href="#"
            className="whitespace-nowrap font-liberation text-[15px] max-[421px]:text-[12px] font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            Leadership
          </a>

          <a
            href="#"
            className="whitespace-nowrap font-liberation text-[15px] max-[421px]:text-[12px] font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            Ventures
          </a>

          <a
            href="#"
            className="flex h-[29px] w-[80px] items-center justify-center bg-[#c49227] px-[14px] font-liberation text-[14px] max-[421px]:text-[12px] font-normal text-white transition-colors duration-200 hover:bg-[#ad7f20]"
          >
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}
