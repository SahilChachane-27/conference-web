
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks, contactInfo, navLinks } from '@/lib/data';
import * as Icons from 'lucide-react';
import { Button } from '@/components/ui/button';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

export function Footer() {
  return (
    <footer className="bg-[#20263e] text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8 text-sm">
          
          {/* Column 1: About */}
          <div className="lg:col-span-2">
            <h2 className="font-bold text-white text-lg mb-4">SustainTechCon 2026</h2>
            <p className="text-gray-400">
                1st International Conference on Sustainable Technologies and Intelligent Systems. Join us to explore the future of sustainability.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.filter(l => !l.isDropdown).map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: About Links */}
           <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.find(l => l.label === 'About')?.subLinks?.map(subLink => (
                  <Link key={subLink.href} href={subLink.href} className="hover:text-white transition-colors">
                      {subLink.label}
                  </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Social & Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  <Icon name={link.icon} className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                <Link href="/registration">Register Now</Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>
            © Copyright {new Date().getFullYear()} - SustainTechCon by Researcher Connect Innovation & Impact Pvt Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
