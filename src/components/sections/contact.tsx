"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, ChevronDown, Lock, User, AtSign, DollarSign, MessageSquare, SendIcon } from "lucide-react";
import { siteConfig } from "@/lib/data";

type FormData = {
  name: string;
  email: string;
  type: string;
  budget: string;
  message: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    type: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate(): string | null {
    if (!formData.name.trim()) return "Identify Yourself / Entity is required.";
    if (!formData.email.trim()) return "Email Address is required.";
    if (!EMAIL_REGEX.test(formData.email)) return "Please enter a valid email address.";
    if (!formData.message.trim()) return "Message Payload is required.";
    return null;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Simulate API call or replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", type: "", budget: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Let's Sync */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-10 lg:pr-12"
          >
            {/* System Online Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00ff9c]/20 bg-[#00ff9c]/5 px-4 py-1.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9c]"></span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#00ff9c] uppercase">System Online</span>
            </div>

            {/* Typography */}
            <div>
              <h2 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Let&apos;s<br />
                <span className="text-[#00ff9c]">Sync.</span>
              </h2>
              <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed max-w-md">
                Bridging human intent with artificial intelligence. Send a signal to 
                initiate collaboration on your next breakthrough.
              </p>
            </div>

            {/* Links Cards */}
            <div className="flex flex-col gap-4 mt-4 max-w-md">
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#00ff9c]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono mb-1">Email</p>
                    <p className="text-sm font-medium text-white">{siteConfig.links.email}</p>
                  </div>
                </div>
                <div className="text-neutral-600 group-hover:text-[#00ff9c] transition-colors pr-2">
                  <ChevronDown className="h-5 w-5 -rotate-90" />
                </div>
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.04] hover:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#00ff9c]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-500 font-mono mb-1">LinkedIn</p>
                    <p className="text-sm font-medium text-white">@shivam-bharti</p>
                  </div>
                </div>
                <div className="text-neutral-600 group-hover:text-[#00ff9c] transition-colors pr-2">
                  <ChevronDown className="h-5 w-5 -rotate-90" />
                </div>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Transmission Data Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-[2rem] bg-[#111111]/80 backdrop-blur-2xl border border-white/5 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff9c]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

              <div className="relative z-10 flex flex-col mb-10">
                <div className="flex items-center justify-between w-full mb-3">
                  <h3 className="text-3xl font-bold text-white tracking-tight">Transmission Data</h3>
                  <div className="flex gap-1.5 opacity-50">
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">Secure Channel:</span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#00ff9c]">Encrypted</span>
                </div>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="h-16 w-16 mb-6 rounded-full bg-[#00ff9c]/10 flex items-center justify-center border border-[#00ff9c]/20">
                     <Send className="h-8 w-8 text-[#00ff9c]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Signal Transmitted</h4>
                  <p className="text-neutral-400">Connection established. Awaiting response.</p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-mono text-[#00ff9c] hover:text-white transition-colors"
                  >
                    Send another signal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 relative z-10">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="relative group">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Identify Yourself / Entity"
                        className="w-full bg-black/50 border border-white/20 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#00ff9c]/50 transition-colors shadow-inner shadow-black/50"
                        required
                      />
                      <User className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-600 group-focus-within:text-[#00ff9c]/70 transition-colors pointer-events-none" />
                    </div>

                    <div className="relative group">
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full bg-black/50 border border-white/20 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#00ff9c]/50 transition-colors shadow-inner shadow-black/50"
                        required
                      />
                      <AtSign className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-600 group-focus-within:text-[#00ff9c]/70 transition-colors pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="relative group">
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full bg-black/50 border border-white/20 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-[#00ff9c]/50 transition-colors appearance-none shadow-inner shadow-black/50"
                      >
                        <option value="" disabled className="text-neutral-400">Project Type</option>
                        <option value="freelance" className="bg-[#111111] text-white">Freelance Web App</option>
                        <option value="contract" className="bg-[#111111] text-white">Contract Role</option>
                        <option value="fulltime" className="bg-[#111111] text-white">Full-time Opportunity</option>
                        <option value="coffee" className="bg-[#111111] text-white">Just saying hi</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-600 group-focus-within:text-[#00ff9c]/70 transition-colors pointer-events-none" />
                    </div>

                    <div className="relative group">
                      <input
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Est. Budget (USD)"
                        className="w-full bg-black/50 border border-white/20 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#00ff9c]/50 transition-colors shadow-inner shadow-black/50"
                      />
                      <DollarSign className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-600 group-focus-within:text-[#00ff9c]/70 transition-colors pointer-events-none" />
                    </div>
                  </div>

                  <div className="relative group h-full">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message Payload"
                      rows={4}
                      className="w-full bg-black/50 border border-white/20 rounded-xl px-5 py-4 text-sm text-white placeholder-neutral-400 focus:outline-none focus:border-[#00ff9c]/50 transition-colors resize-none shadow-inner shadow-black/50"
                      required
                    />
                    <MessageSquare className="absolute right-5 top-5 h-5 w-5 text-neutral-600 group-focus-within:text-[#00ff9c]/70 transition-colors pointer-events-none" />
                  </div>

                  {status === "error" && errorMessage && (
                    <p className="text-red-400 text-sm font-mono mt-1">! {errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full mt-4 flex items-center justify-between rounded-xl bg-[#4b8cdb] px-6 py-4 transition-all hover:bg-[#3F7CAC] disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    <span className="text-sm font-bold tracking-widest text-white uppercase">
                      {status === "loading" ? "Transmitting..." : "Transmit Signal"}
                    </span>
                    {status === "loading" ? (
                      <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <SendIcon className="h-5 w-5 text-white group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>

                  <div className="pt-6 flex items-center justify-center gap-2">
                    <Lock className="h-3 w-3 text-[#00ff9c]/50" />
                    <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#00ff9c]/50">
                      256-Bit AES Encryption Active
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
