import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Danial Shoaib — AI Operations Leader",
  description:
    "AI Operations Leader designing scalable support systems, automation workflows, and intelligent customer experience infrastructure.",
  keywords: [
    "AI Operations",
    "Support Systems",
    "Workflow Automation",
    "Queue Optimization",
    "SLA",
    "Prompt Engineering",
    "Danial Shoaib",
  ],
  openGraph: {
    title: "Danial Shoaib — AI Operations Leader",
    description:
      "AI Operations Leader designing scalable support systems, automation workflows, and intelligent customer experience infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}
