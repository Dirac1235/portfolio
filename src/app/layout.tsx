import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Webi Muleta | Full Stack Developer",
    template: "%s | Webi Muleta"
  },
  description: "Full Stack Developer specializing in React, Next.js, and building impactful digital products.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Web Development", "Portfolio", "Webi Muleta"],
  authors: [{ name: "Webi Muleta", url: "https://webimuleta.dev" }],
  creator: "Webi Muleta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://webimuleta.dev",
    title: "Webi Muleta | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and building impactful digital products.",
    siteName: "Webi Muleta",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webi Muleta — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webi Muleta | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and building impactful digital products.",
    images: ["/og-image.jpg"],
    creator: "@dirac1235",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0B09" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
