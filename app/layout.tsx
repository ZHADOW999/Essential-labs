
import { Inter } from "next/font/google"
import { cn } from "../lib/utils"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ThemeProvider } from "../components/theme-provider"
import Head from "next/head"
import type { Viewport } from 'next'
import { Metadata } from "next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // interactiveWidget: 'resizes-visual',
}
export const metadata: Metadata = {
  metadataBase: new URL('https://essential-labs.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  // openGraph: {
  //   images: '/og-image.png',
  // },
  title: "Essential Labs",
  description: "Essential Labs offers a comprehensive range of professional-grade laboratory equipment and supplies for research and industrial applications. Discover our high-quality products designed to meet the needs of modern laboratories.",
  
  keywords: ["laboratory equipment", "research supplies", "scientific instruments", "lab tools", "professional-grade equipment"],
  authors: [{ name: "Essential Labs" }],
  // viewport: "width=device-width, initial-scale=1.0",
  // themeColor: "#ffffff",
  publisher: "Essential Labs",
  applicationName: "Essential Labs",

  openGraph: {
    title: "Essential Labs",
    description: "Explore our extensive range of professional-grade laboratory equipment and supplies.",
    url: "https://essential-labs.vercel.app/",
    type: "website",
    siteName: "Essential Labs",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Essential Labs"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@essentiallabs",
    title: "Essential Labs",
    description: "Explore our extensive range of professional-grade laboratory equipment and supplies.",
    images: "https://essential-labs.vercel.app/images/og-image.png",
    creator: "@essentiallabs",
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
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
      <meta name="google-site-verification" content="-UZMALg3TLNF79sAc-UTTRBVt2pmMTeBop-3WMzh9V0" />
      </Head>
      <body className={cn(inter.className, "min-h-screen bg-background flex flex-col")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}










// import { Inter } from "next/font/google"
// import { cn } from "../lib/utils"
// import { Header } from "../components/header"
// import { Footer } from "../components/footer"
// import { ThemeProvider } from "../components/theme-provider"
// import { Metadata } from "next"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata ={
//   title:"Essential labs",
//   description:"Essential labs is a collection of tools and resources for developers",
//   icons:{
//     icon:"/favicon.ico"
//   }
// }

// export default function RootLayout({
  
//   children,
// }: {
//   children: React.ReactNode
// }) {
  
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={cn(inter.className, "min-h-screen bg-background flex flex-col")}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <Header />
//           <main className="flex-grow">{children}</main>
//           <Footer />
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }



