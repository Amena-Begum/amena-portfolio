import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["normal", "italic"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

const title = "Amena Begum — Full-Stack Developer";
const description =
  "Portfolio of Amena Begum, a full-stack developer from Dhaka building responsive web apps with React, Next.js, TypeScript and MongoDB.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amena-begum-portfolio.vercel.app"),
  title,
  description,
  icons: { icon: "/amena.jpg" },
  openGraph: { title, description, type: "website", images: [{ url: "/og-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
