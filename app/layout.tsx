import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rasike Abeyratne — Portfolio",
  description: "Principal software engineer, creator, and writer based in Colombo.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Rasike Abeyratne — Portfolio",
    description: "Engineer • Digital Creator • Writer — blending tech, art, and sustainability.",
    url: "https://your-domain.tld",
    siteName: "Rasike Abeyratne",
    images: ["/og.png"],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
