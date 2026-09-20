import Image from "next/image";

export default function Navbar() {
  return (
    <header className="site-header h-[123px] w-full bg-[#f6f4f0]">
      <nav className="relative mx-auto flex h-full w-full max-w-[1040px] items-center justify-between">

        {/* Left navigation */}
        <div className="flex items-center gap-[48px]">
          <a
            href="/about"
            className="whitespace-nowrap font-liberation text-[15px] font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            About Us
          </a>

          <a
            href="#"
            className="whitespace-nowrap font-liberation text-[15px] font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            Intelligent Capital Advisory
          </a>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <Image
            src="/images/navbar/logo.png"
            alt="The U Group"
            width={76}
            height={60}
            priority
          />
        </div>

        {/* Right navigation */}
        <div className="flex items-center gap-[40px]">
          <a
            href="#"
            className="whitespace-nowrap font-liberation text-[15px] font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            Leadership
          </a>

          <a
            href="#"
            className="whitespace-nowrap font-liberation text-[15px] font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            Ventures
          </a>

          <a
            href="#"
            className="flex h-[29px] w-[80px] items-center justify-center bg-[#c49227] px-[14px] font-liberation text-[14px] font-normal text-white transition-colors duration-200 hover:bg-[#ad7f20]"
          >
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}
