import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { MatrixBackground } from "@/components/ui/matrix-background";
import { CursorGlow } from "@/components/ui/cursor-glow";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#0a0a0a] text-neutral-50 antialiased relative" suppressHydrationWarning>
        <MatrixBackground />
        <CursorGlow />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
