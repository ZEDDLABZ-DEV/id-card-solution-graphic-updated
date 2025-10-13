import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ID Card Solutions & Graphics - Professional Identity Solutions",
  description: "Professional ID card design, printing, and graphic solutions. Custom badges, school IDs, corporate cards, and more. High-quality, durable identity solutions.",
  keywords: "ID cards, identity cards, school badges, corporate IDs, graphic design, card printing, professional identity solutions",
  authors: [{ name: "ID Card Solutions & Graphics" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
