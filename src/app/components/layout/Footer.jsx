import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Main footer */}
            <div className="min-h-[288px] bg-[#16181a] text-white">
                <div className="mx-auto flex min-h-[288px] w-full max-w-[1040px]">

                    {/* Logo + tagline */}
                    <div className="flex w-[45%] flex-col">
                        <div className="flex h-[149px] w-[177px] items-center justify-center bg-[#f6f4f0]">
                            <Image
                                src="/images/navbar/logo.png"
                                alt="The U Group"
                                width={76}
                                height={60}
                                priority
                            />
                        </div>

                        <p className="mt-[28px] max-w-[300px] font-liberation text-[14px] leading-[1.5] text-[#d7d7d7]">
                            We build businesses, create opportunity, and generate lasting
                            shared value.
                        </p>
                    </div>

                    {/* Company */}
                    <div className="pt-[48px]">
                        <h3 className="font-mono-brand text-[11px] font-bold tracking-[0.08em] text-[#c49227]">
                            COMPANY
                        </h3>

                        <div className="mt-[20px] flex flex-col gap-[11px]">
                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                About Us
                            </a>

                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                Intelligent Capital Advisory
                            </a>

                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                Leadership
                            </a>

                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                Ventures
                            </a>
                        </div>
                    </div>

                    {/* Ventures */}
                    <div className="ml-[70px] pt-[48px]">
                        <h3 className="font-mono-brand text-[11px] font-bold tracking-[0.08em] text-[#c49227]">
                            VENTURES
                        </h3>

                        <div className="mt-[20px] flex flex-col gap-[11px]">
                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                Portfolio & Partnerships
                            </a>

                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                JuJu Labs
                            </a>

                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                Bioved
                            </a>

                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                VenIQ
                            </a>
                        </div>
                    </div>

                    {/* Capital & Advisory */}
                    <div className="ml-[70px] pt-[48px]">
                        <h3 className="font-mono-brand text-[11px] font-bold tracking-[0.08em] text-[#c49227]">
                            CAPITAL & ADVISORY
                        </h3>

                        <div className="mt-[20px] flex flex-col gap-[11px]">
                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                Intelligent Capital Advisory
                            </a>

                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                Blink Equity Capital
                            </a>

                            <a
                                href="#"
                                className="font-liberation text-[13px] text-[#d7d7d7] transition-opacity hover:opacity-65"
                            >
                                Blink Bridge Capital
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="flex h-[50px] w-full items-center justify-between bg-[#f6f4f0] px-6">
                <p className="font-liberation text-[11px] text-[#555555]">
                    © 2026 The U Group LLC. All Rights Reserved.
                </p>

                <p className="font-liberation text-[11px] text-[#555555]">
                    Designed and Built by UNIFIROLABS
                </p>
            </div>
        </footer>
    );
}
