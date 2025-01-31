"use client"

import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ModeToggle } from "../components/mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"

export function Header() {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`)
    }
  }

  return (
 <header className="h-auto relative">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              Essnential labs
            </Link>
           
            <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden md:block">
              <div className="relative">
                
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search equipment..."
                  className="pl-8 w-full "
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
  
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/categories" className="text-sm hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="/products" className="text-sm hover:text-primary transition-colors">
                All Products
              </Link>
              <ModeToggle />
            </nav>
  
            <div className="md:hidden flex items-center gap-4">
            <div> 
              <p className="sr-only">search</p>
              <Button variant="outline" size="icon" onClick={()=>setIsSearchOpen(prev => !prev)}><Search className=" h-6 w-6 text-muted-foreground" /></Button>
              </div>
              <ModeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => router.push("/categories")}>Categories</DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => router.push("/products")}>All Products</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

      </nav>

      <form onSubmit={handleSearch} className={`flex-1 md:hidden h-14 hidden w-full ${isSearchOpen===true && '!block'} transition-all duration-300 z-50`}>
              <div className={``}>
                
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search equipment..."
                  className="pl-8 h-14 w-full "
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
 </header>
  )
}

