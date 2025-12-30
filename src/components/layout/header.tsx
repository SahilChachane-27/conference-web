import Link from 'next/link';
import { navLinks } from '@/lib/data';

export function Header() {
  return (
    <header className="menu-bar-container">
        <div className="menu-bar">
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
