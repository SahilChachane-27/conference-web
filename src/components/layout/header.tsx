"use client";

import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="menu-bar-container">
        <div className={cn("menu-bar", { "scrolled": scrolled })}>
            <ul>
                {navLinks.map((link) => (
                    link.isDropdown && link.subLinks ? (
                        <li key={link.label}>
                             <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1 outline-none">
                                    {link.label}
                                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {link.subLinks.map(subLink => (
                                        <DropdownMenuItem key={subLink.href} asChild>
                                            <Link href={subLink.href}>{subLink.label}</Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    ) : (
                        <li key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    )
                ))}
            </ul>
        </div>
    </header>
  );
}
