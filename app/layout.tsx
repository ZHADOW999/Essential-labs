
import { Inter } from "next/font/google"
import { cn } from "../lib/utils"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ThemeProvider } from "../components/theme-provider"
import Head from "next/head"
import favicon from "@/public/favicon.ico"
import { Metadata } from "next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Essential Labs",
  description: "Essential Labs offers a comprehensive range of professional-grade laboratory equipment and supplies for research and industrial applications. Discover our high-quality products designed to meet the needs of modern laboratories.",
  icons: {
    icon: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png" }]
  },
  keywords: ["laboratory equipment", "research supplies", "scientific instruments", "lab tools", "professional-grade equipment"],
  authors: [{ name: "Essential Labs" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
  robots: "index, follow",
  publisher: "Essential Labs",
  applicationName: "Essential Labs",

  openGraph: {
    title: "Essential Labs",
    description: "Explore our extensive range of professional-grade laboratory equipment and supplies.",
    url: "https://www.essentiallabs.com",
    type: "website",
    images: [
      {
        url: "https://www.essentiallabs.com/images/og-image.jpg",
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
    images: "https://www.essentiallabs.com/images/og-image.jpg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    
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



