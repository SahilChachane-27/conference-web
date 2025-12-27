import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/lib/data';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-8 text-center">
        <div className="flex justify-center items-center gap-8 md:gap-12 mb-8 flex-wrap">
            <Image src="/reframed_logo-preview.png" alt="SustainTechCon Logo" width={120} height={120} className="object-contain bg-white p-2 rounded-md" />
            <Image src="/College.png" alt="College Logo" width={120} height={120} className="object-contain bg-white p-2 rounded-md" />
            <Image src="/RC_logo.jpeg" alt="Researcher Connect Logo" width={120} height={120} className="object-contain bg-white p-2 rounded-md" />
        </div>
        <div className="flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-white hover:text-primary transition-colors">
              <Icon name={link.icon} className="h-6 w-6" />
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
        <p className="text-sm text-white/80">
          © Copyright {new Date().getFullYear()} - SustainTechCon by Researcher Connect Innovation & Impact Pvt Ltd
        </p>
      </div>
    </footer>
  );
}
