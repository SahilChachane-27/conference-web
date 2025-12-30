"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Bell } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { usePathname } from 'next/navigation';

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";


const Logo = () => (
  <Link href="/" className="flex items-center gap-3">
    <Image
      src="/reframed_logo-preview.png"
      alt="SustainTechCon Logo"
      width={40}
      height={40}
      className="h-10 w-10"
      priority
    />
    <span className="font-bold text-lg hidden sm:inline-block">SustainTechCon</span>
  </Link>
);

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary px-4",
                isActive ? "text-primary" : "text-foreground"
            )}
        >
            {children}
            {isActive && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />}
        </Link>
    );
};

const DropdownLink = ({ label, subLinks }: { label: string, subLinks: { href: string; label: string }[] }) => {
    const pathname = usePathname();
    const isActive = subLinks.some(link => pathname.startsWith(link.href));
    
    return (
        <div className="relative group px-4">
            <button
              type="button"
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-foreground"
            )}>
              {label}
              <ChevronDown className="h-4 w-4" />
            </button>
            {isActive && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />}


            <div className="absolute left-0 hidden min-w-[220px] pt-4 group-hover:block z-20">
              <div className="rounded-md bg-popover shadow-lg py-2 border border-border">
                {subLinks.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-accent-foreground"
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
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />

        <nav className="hidden md:flex items-center">
          {navLinks.map((link) =>
            link.isDropdown ? (
              <DropdownLink key={link.label} label={link.label} subLinks={link.subLinks || []} />
            ) : (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Notifications</span>
                </Button>
                 <Button asChild>
                    <Link href="/registration">Buy Ticket</Link>
                </Button>
            </div>
          
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <div className="flex flex-col gap-6 p-6">
                  <Logo />
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
                                className="text-foreground hover:text-primary"
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
                          className="text-lg font-medium text-foreground hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      )
                    )}
                  </nav>
                   <div className="mt-6">
                    <Button asChild className="w-full">
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
