"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, ChevronRight, Lock, User, AtSign, DollarSign, MessageSquare, Send, Loader2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

// Zod Schema Setup
const contactSchema = z.object({
  name: z.string().min(2, "Identity is required").max(100),
  email: z.string().email("Invalid email format"),
  type: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message payload must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsTransmitting(true);
    // Simulate API transmission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Transmitted Data:", data);
    
    setIsTransmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Context & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-10"
          >
            {/* System Online Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff41]"></span>
              </span>
              <span className="text-[11px] font-mono tracking-widest text-zinc-300 uppercase">System Online</span>
            </div>

            {/* Heading & Subtext */}
            <div>
              <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 font-sans">
                Let&apos;s <span className="text-[#00ff41]">Sync.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md font-sans">
                Bridging human intent with artificial intelligence. Send a signal to initiate collaboration on your next breakthrough.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4 max-w-md pt-4">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-[#00ff41]/50 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] hover:translate-x-2"
              >
                <div className="flex items-center gap-5">
                  <Mail className="h-6 w-6 text-zinc-500 group-hover:text-[#00ff41] transition-colors" />
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-1">Direct Transmission</p>
                    <p className="text-base font-medium text-white font-sans">{siteConfig.links.email}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-zinc-600 group-hover:text-[#00ff41] transition-colors" />
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-[#00ff41]/50 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] hover:translate-x-2"
              >
                <div className="flex items-center gap-5">
                  <svg className="h-6 w-6 text-zinc-500 group-hover:text-[#00ff41] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mb-1">Professional Network</p>
                    <p className="text-base font-medium text-white font-sans">@shivam-bharti</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-zinc-600 group-hover:text-[#00ff41] transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: The Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-xl mx-auto lg:ml-auto"
          >
            <div className="rounded-2xl bg-zinc-900/40 backdrop-blur-md border border-zinc-800 p-8 sm:p-10 shadow-2xl relative">
              
              {/* macOS/Terminal Dots */}
              <div className="absolute top-6 right-6 flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>

              {/* Form Header */}
              <div className="mb-10 pt-2">
                <h3 className="text-2xl font-bold text-white mb-2 font-sans">Transmission Data</h3>
                <p className="text-xs font-mono text-[#00ff41] uppercase tracking-widest">
                  Secure Channel: Encrypted
                </p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="h-16 w-16 mb-6 rounded-full bg-[#00ff41]/10 flex items-center justify-center border border-[#00ff41]/30">
                    <Send className="h-8 w-8 text-[#00ff41]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-sans">Signal Transmitted</h4>
                  <p className="text-zinc-400 font-sans">Data received successfully. Awaiting response.</p>
                </motion.div>
              ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit(onSubmit)} 
                    className="space-y-8 font-sans"
                  >
                    
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input
                          {...register("name")}
                          placeholder="Identify Yourself / Entity"
                          className={"w-full bg-transparent border-b-2 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00ff41] transition-all pr-10 " + (errors.name ? "border-red-500 focus:border-red-500" : "border-zinc-700")}
                        />
                        <User className="absolute right-2 top-3 h-5 w-5 text-zinc-600 group-focus-within:text-[#00ff41] transition-colors pointer-events-none" />
                        {errors.name && <p className="absolute -bottom-5 left-0 text-[10px] text-red-500 font-mono tracking-wide">{errors.name.message as string}</p>}
                      </div>

                      <div className="relative group">
                        <input
                          {...register("email")}
                          placeholder="Email Address"
                          className={"w-full bg-transparent border-b-2 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00ff41] transition-all pr-10 " + (errors.email ? "border-red-500 focus:border-red-500" : "border-zinc-700")}
                        />
                        <AtSign className="absolute right-2 top-3 h-5 w-5 text-zinc-600 group-focus-within:text-[#00ff41] transition-colors pointer-events-none" />
                        {errors.email && <p className="absolute -bottom-5 left-0 text-[10px] text-red-500 font-mono tracking-wide">{errors.email.message as string}</p>}
                      </div>
                    </div>

                    {/* Row 2: Type & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="relative group">
                        <select
                          {...register("type")}
                          defaultValue=""
                          className="w-full bg-transparent border-b-2 border-zinc-700 py-3 text-white focus:outline-none focus:border-[#00ff41] transition-all appearance-none pr-10 cursor-pointer text-sm"
                        >
                          <option value="" disabled className="text-zinc-500 bg-zinc-900">Project Type</option>
                          <option value="freelance" className="bg-zinc-900 text-white">Freelance Web App</option>
                          <option value="contract" className="bg-zinc-900 text-white">Contract Role</option>
                          <option value="fulltime" className="bg-zinc-900 text-white">Full-time Opportunity</option>
                          <option value="coffee" className="bg-zinc-900 text-white">Just saying hi</option>
                        </select>
                        <ChevronRight className="absolute right-2 top-3 h-5 w-5 text-zinc-600 group-focus-within:text-[#00ff41] transition-colors pointer-events-none rotate-90" />
                      </div>

                      <div className="relative group">
                        <input
                          {...register("budget")}
                          placeholder="Est. Budget (USD)"
                          className="w-full bg-transparent border-b-2 border-zinc-700 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00ff41] transition-all pr-10"
                        />
                        <DollarSign className="absolute right-2 top-3 h-5 w-5 text-zinc-600 group-focus-within:text-[#00ff41] transition-colors pointer-events-none" />
                      </div>
                    </div>

                    {/* Row 3: Message Payload */}
                    <div className="relative group !mt-12">
                      <textarea
                        {...register("message")}
                        placeholder="Message Payload"
                        rows={3}
                        className={"w-full bg-transparent border-b-2 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00ff41] transition-all resize-none pr-10 min-h-[50px] " + (errors.message ? "border-red-500 focus:border-red-500" : "border-zinc-700")}
                      />
                      <MessageSquare className="absolute right-2 bottom-4 h-5 w-5 text-zinc-600 group-focus-within:text-[#00ff41] transition-colors pointer-events-none" />
                      {errors.message && <p className="absolute -bottom-5 left-0 text-[10px] text-red-500 font-mono tracking-wide">{errors.message.message as string}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="!mt-12">
                      <button
                        type="submit"
                        disabled={isTransmitting}
                        className="w-full flex items-center justify-center gap-3 py-4 rounded-lg border border-[#00ff41]/50 bg-[#00ff41]/5 text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all duration-300 font-mono font-bold tracking-widest disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                      >
                        {isTransmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            TRANSMITTING...
                          </>
                        ) : (
                          <>
                            TRANSMIT SIGNAL
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41]/20 to-transparent -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]" />
                      </button>
                    </div>

                    {/* Encryption Footer */}
                    <div className="pt-2 flex items-center justify-center">
                      <Lock className="h-3 w-3 text-[#00ff41]/50 mr-2" />
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#00ff41]/50">
                        256-Bit AES Encryption Active
                      </span>
                    </div>
                  </motion.form>
              )}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
