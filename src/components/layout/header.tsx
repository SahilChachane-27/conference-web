"use client";

import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

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
                    link.isDropdown ? (
                        link.subLinks?.map(subLink => (
                            <li key={subLink.href}>
                                <Link href={subLink.href}>{subLink.label}</Link>
                            </li>
                        ))
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
