import { Inter } from "next/font/google"
import { cn } from "../lib/utils"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { ThemeProvider } from "../components/theme-provider"
import Head from "next/head"
import favicon from "@/public/favicon.ico"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
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



import './globals.css'