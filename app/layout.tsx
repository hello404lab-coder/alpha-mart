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
  metadataBase: new URL("https://curatedbyalpha.com"),
  title: {
    default: "Curated by Alpha",
    template: "%s — Curated by Alpha",
  },
  description:
    "Furnishing your luxury. Oak and walnut pieces, curated in Thrippunithura, Ernakulam.",
  openGraph: {
    title: "Curated by Alpha",
    description:
      "Furnishing your luxury. Oak and walnut pieces, curated in Thrippunithura, Ernakulam.",
    images: [{ url: "/og.jpg", width: 1600, height: 900 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-cream text-ink font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
