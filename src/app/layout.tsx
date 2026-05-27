import type { Metadata } from "next";
import { Raleway, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webimuleta.dev"),
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
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#100F0F" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${raleway.variable} ${nunitoSans.variable} antialiased`}>
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
