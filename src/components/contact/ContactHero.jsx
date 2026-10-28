"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="bg-[#f6f4f0] relative w-full h-[280px] overflow-hidden">
      {/* Background Painted Artwork */}
      <div className="relative h-[380px] w-full">
        {/* <Image
          src="/images/contact/hero-illustration.jpg"
          alt="Painted twilight sky and coastal village illustration"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        /> */}

        {/* Centered Hero Text */}
        <div className="relative z-10 flex h-[280px] w-full items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="font-liberation text-3xl font-bold tracking-tight text-[#CEA44D] drop-shadow-md sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.25]">
              Contact Us.             
            </h1>
            <h4 className="text-lg md:text-2xl mt-4 font-liberation text-[#CEA44D]">
              Home - Contact Us
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
