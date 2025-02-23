
import { Inter } from "next/font/google"
import { cn } from "../lib/utils"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ThemeProvider } from "../components/theme-provider"
import Head from "next/head"
import type { Viewport } from 'next'
import { Metadata } from "next"
import "./globals.css"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"],display:"swap" })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}
export const metadata: Metadata = {
  metadataBase: new URL('https://www.essentiallabinc.com/'),
  alternates: {
    canonical: '/',
    // languages: {
    //   'en-US': '/en-US',
    //   'de-DE': '/de-DE',
    // },
  },

  title: "Essential Laboratory Inc",
  description: "Essential Laboratory Inc offers a comprehensive range of professional-grade laboratory equipment and supplies for research and industrial applications. Discover our high-quality products designed to meet the needs of modern laboratories.",
  
  keywords: ["laboratory equipment", "research supplies", "scientific instruments", "lab tools", "professional-grade equipment","essential lab inc",  "essential laboratory inc","essential lab","essential laboratory"],
  authors: [{ name: "Essential Laboratory Inc" }],
  publisher: "Essential Laboratory Inc",
  applicationName: "Essential Laboratory Inc",

  openGraph: {
    
    title: "Essential Laboratory Inc",
    description: "Explore our extensive range of professional-grade laboratory equipment and supplies.",
    url: "https://www.essentiallabinc.com/",
    type: "website",
    siteName: "Essential Laboratory Inc",
    images: [
      {
        url: "https://www.essentiallabinc.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Essential Laboratory Inc"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@essentiallabinc",
    title: "Essential Laboratory Inc",
    description: "Explore our extensive range of professional-grade laboratory equipment and supplies.",
    images: "https://www.essentiallabinc.com/images/og-image.png",
    creator: "@essentiallabinc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  // manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" sizes="48x48"/>
      <meta name="google-site-verification" content="UehJ1Ac-8shShH575IG8LwyF1qPkP7D4t85suTBsmKs" />
      </Head>
      <body className={cn(inter.className, "min-h-screen bg-background flex flex-col")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}
            
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics/>
        <SpeedInsights />
      </body>
    </html>
  )
}







