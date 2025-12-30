"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Bell } from "lucide-react";
import { usePathname } from 'next/navigation';

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";


const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <Link href="/" className="flex items-center gap-3">
    <Image
      src="/reframed_logo-preview.png"
      alt="SustainTechCon Logo"
      width={40}
      height={40}
      className="h-10 w-10"
      priority
    />
    <span className={cn(
        "font-bold text-lg hidden sm:inline-block transition-colors",
        isScrolled ? 'text-white' : 'text-black'
    )}>
        SustainTechCon
    </span>
  </Link>
);

const NavLink = ({ href, children, isScrolled }: { href: string, children: React.ReactNode, isScrolled: boolean }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "relative text-sm font-medium transition-colors px-4",
                isScrolled ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black',
                isActive && (isScrolled ? 'text-white' : 'text-black font-semibold')
            )}
        >
            {children}
            {isActive && <span className={cn("absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full", isScrolled ? 'bg-white' : 'bg-black')} />}
        </Link>
    );
};

const DropdownLink = ({ label, subLinks, isScrolled }: { label: string, subLinks: { href: string; label: string }[], isScrolled: boolean }) => {
    const pathname = usePathname();
    const isActive = subLinks.some(link => pathname.startsWith(link.href));
    
    return (
        <div className="relative group px-4">
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors",
                isScrolled ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black',
                isActive && (isScrolled ? 'text-white' : 'text-black font-semibold')
            )}>
              {label}
              <ChevronDown className="h-4 w-4" />
            </button>
            {isActive && <span className={cn("absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full", isScrolled ? 'bg-white' : 'bg-black')} />}


            <div className="absolute left-0 hidden min-w-[220px] pt-4 group-hover:block z-20">
              <div className="rounded-md bg-white shadow-lg py-2 border">
                {subLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 hover:text-black"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
        </div>
    );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? 'bg-black' : 'bg-white'
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo isScrolled={isScrolled} />

        <nav className="hidden md:flex items-center">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <DropdownLink key={link.label} label={link.label} subLinks={link.subLinks || []} isScrolled={isScrolled} />
            ) : (
              <NavLink key={link.href} href={link.href} isScrolled={isScrolled}>{link.label}</NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" size="icon" className={cn('transition-colors', isScrolled ? 'text-white hover:bg-white/10 hover:text-white' : 'text-black hover:bg-black/5 hover:text-black')}>
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>
                 <Button asChild className={cn('transition-all', isScrolled ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800')}>
                    <Link href="/registration">Buy Ticket</Link>
                </Button>
            </div>
          
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open Menu" className={cn('transition-colors', isScrolled ? 'text-white hover:text-white' : 'text-black hover:text-black')}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Logo isScrolled={false}/>
                  <nav className="flex flex-col gap-4 mt-4">
                    {navLinks.map((link) =>
                      link.isDropdown ? (
                        <div key={link.label}>
                          <p className="font-semibold text-foreground/80">
                            {link.label}
                          </p>
                          <div className="ml-4 mt-2 flex flex-col gap-2">
                            {link.subLinks?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-black hover:text-primary"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-lg font-medium text-black hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </nav>
                   <div className="mt-6">
                    <Button asChild className="w-full bg-black text-white">
                        <Link href="/registration">Buy Ticket</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
