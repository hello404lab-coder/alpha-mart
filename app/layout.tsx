import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz", "WONK"],
});

export const metadata: Metadata = {
  title: {
    default: "The Alpha Room — Alpha Furniture Mart",
    template: "%s — Alpha Furniture Mart",
  },
  description:
    "One box. A whole room. Oak furniture that arrives, opens, and becomes a home.",
  openGraph: {
    title: "The Alpha Room — Alpha Furniture Mart",
    description:
      "One box. A whole room. Oak furniture that arrives, opens, and becomes a home.",
    images: [{ url: "/og.jpg", width: 1600, height: 900 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
