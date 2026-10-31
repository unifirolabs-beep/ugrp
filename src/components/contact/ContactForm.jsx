"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, CheckCircle, Loader2, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Zod validation schema according to specifications
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name cannot exceed 80 characters." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Please provide a valid email address." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Phone number is required (min 7 digits)." })
    .regex(/^[+0-9\s\-()]+$/, {
      message: "Please enter a valid phone number (digits, +, -, () only).",
    })
    .max(25, { message: "Phone number is too long." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2500, { message: "Message cannot exceed 2500 characters." }),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted successfully:", data);
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@junedigann.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-[#f6f4f0] py-16 md:py-24 text-[#202020] font-liberation">
      <div className="mx-auto w-full max-w-[1040px] px-6 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-5 flex flex-col pt-2">
            {/* Minimalist Envelope Icon */}
            <div className="mb-6 inline-flex text-[#202020]">
              <Mail className="h-10 w-10 stroke-[1.4]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-[#16181a] tracking-tight">
              For commissions <br className="hidden sm:inline" />
              and project inquiries, <br className="hidden sm:inline" />
              please email:
            </h2>

            <div className="mt-4 flex items-center gap-2">
              <a
                href="mailto:rgauze@theugrp.com"
                className="text-lg sm:text-xl font-bold text-[#16181a] underline decoration-[#16181a] underline-offset-4 hover:text-[#CEA44D] hover:decoration-[#CEA44D] transition-colors"
              >
                rgauze@theugrp.com
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1 text-[#202020]/70 hover:text-[#16181a] transition-colors rounded"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-700" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            <p className="mt-3 text-sm text-[#3a3a3a]">
              or Send a message via this form
            </p>

            <div className="mt-10 border-t border-[#202020]/15 pt-6 text-xs text-[#555555] space-y-1.5">
              <p className="font-semibold text-[#202020]">Response Time</p>
              <p>We typically review and reply to all inquiries within 24–48 business hours.</p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-bold text-[#16181a] mb-8">
              Contact
            </h3>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-lg bg-white/70 backdrop-blur-sm p-8 text-center shadow-sm border border-[#202020]/10"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700 mb-4">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#16181a] mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-[#444444] max-w-md mx-auto mb-6">
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setIsSubmitted(false);
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-[#525D73] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#3f495d] active:scale-95 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-7"
                >
                  {/* Name field */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="block text-sm text-[#202020] mb-1 font-normal"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      {...register("name")}
                      className={`w-full bg-transparent border-b ${
                        errors.name
                          ? "border-red-600 focus:border-red-600"
                          : "border-[#202020] focus:border-[#CEA44D]"
                      } pb-2 pt-1 text-sm sm:text-base text-[#16181a] placeholder:text-[#202020]/30 outline-none transition-colors duration-200`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone fields in responsive grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    {/* Email */}
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-sm text-[#202020] mb-1 font-normal"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="jane@example.com"
                        {...register("email")}
                        className={`w-full bg-transparent border-b ${
                          errors.email
                            ? "border-red-600 focus:border-red-600"
                            : "border-[#202020] focus:border-[#CEA44D]"
                        } pb-2 pt-1 text-sm sm:text-base text-[#16181a] placeholder:text-[#202020]/30 outline-none transition-colors duration-200`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <label
                        htmlFor="phone"
                        className="block text-sm text-[#202020] mb-1 font-normal"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        {...register("phone")}
                        className={`w-full bg-transparent border-b ${
                          errors.phone
                            ? "border-red-600 focus:border-red-600"
                            : "border-[#202020] focus:border-[#CEA44D]"
                        } pb-2 pt-1 text-sm sm:text-base text-[#16181a] placeholder:text-[#202020]/30 outline-none transition-colors duration-200`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="block text-sm text-[#202020] mb-1 font-normal"
                    >
                      Write a message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project or inquiry..."
                      {...register("message")}
                      className={`w-full bg-transparent border-b ${
                        errors.message
                          ? "border-red-600 focus:border-red-600"
                          : "border-[#202020] focus:border-[#CEA44D]"
                      } pb-2 pt-1 text-sm sm:text-base text-[#16181a] placeholder:text-[#202020]/30 outline-none resize-y min-h-[90px] transition-colors duration-200`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center bg-[#CEA44D] px-4 py-2 text-sm font-medium text-white cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
