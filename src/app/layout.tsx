import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio — Creative Developer",
  description:
    "Creative Developer crafting high-end digital experiences at the intersection of design and engineering.",
  keywords: [
    "Creative Developer",
    "Portfolio",
    "Web Development",
    "Design",
    "Framer Motion",
    "Next.js",
  ],
  openGraph: {
    title: "Portfolio — Creative Developer",
    description:
      "High-end digital experiences at the intersection of design and engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} antialiased`}>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
