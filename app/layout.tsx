import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "david-sanchez-portfolio.dsancheztaba66.chatgpt.site";

const deploymentUrl = deploymentHost.startsWith("http")
  ? deploymentHost
  : `https://${deploymentHost}`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),
  title: "David Sanchez — Full Stack Developer",
  description:
    "Portfolio of David Sanchez Tabarez, a full-stack developer building React, Node.js, real-time, and AI-powered products.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "David Sanchez — Full Stack Developer",
    description: "React, Node.js, real-time systems, and thoughtful AI integration.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "David Sanchez — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Sanchez — Full Stack Developer",
    description: "React, Node.js, real-time systems, and thoughtful AI integration.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
