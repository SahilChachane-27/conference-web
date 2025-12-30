
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks, contactInfo, navLinks } from '@/lib/data';
import * as Icons from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

export function Footer() {
    const bgImage = PlaceHolderImages.find(img => img.id === 'testimonials-background');
  return (
    <footer className="relative text-[#c4ffff] py-12" style={{ backgroundColor: '#20263e' }}>
       {bgImage && (
            <Image
                src={bgImage.imageUrl}
                alt={bgImage.description}
                fill
                className="object-cover opacity-10"
                data-ai-hint={bgImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#20263e] via-[#20263e]/80 to-[#20263e]" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: Quick Links */}
            <div className="space-y-4 flex flex-col items-center md:items-start">
                 <h2 className="font-headline text-2xl font-bold">
                    Quick <span style={{ color: '#7732a6' }}>Links</span>
                </h2>
                <nav className="grid grid-cols-2 gap-x-8 gap-y-1.5 mt-2 text-center md:text-left">
                    {navLinks.map((link) => (
                        link.isDropdown ? (
                            link.subLinks?.map(subLink => (
                                <Link key={subLink.href} href={subLink.href} className="text-sm text-[#bbbbbb] hover:text-[#c4ffff] hover:underline underline-offset-4 transition-colors whitespace-nowrap py-1">
                                    {subLink.label}
                                </Link>
                            ))
                        ) : (
                            <Link key={link.href} href={link.href} className="text-sm text-[#bbbbbb] hover:text-[#c4ffff] hover:underline underline-offset-4 transition-colors whitespace-nowrap py-1">
                                {link.label}
                            </Link>
                        )
                    ))}
                </nav>
            </div>

            {/* Column 2: Get in Touch */}
            <div className="space-y-4">
                <h2 className="font-headline text-2xl font-bold text-center">
                    Get in <span style={{ color: '#7732a6' }}>Touch</span>
                </h2>
                <div className="space-y-3">
                {contactInfo.map((info) => (
                    <Card key={info.title} className="bg-transparent text-card-foreground border-t-0 border-r-0 border-b-0 shadow-none hover:shadow-md transition-shadow duration-300" style={{ borderColor: '#7732a6', borderLeftWidth: '4px' }}>
                        <CardHeader className="flex flex-row items-center gap-3 p-3">
                            <div className="flex items-center justify-center h-8 w-8 rounded-md shrink-0" style={{ backgroundColor: 'rgba(119, 50, 166, 0.2)'}}>
                                <Icon name={info.icon} className="h-4 w-4" style={{ color: '#7732a6' }} />
                            </div>
                            <div>
                                <CardTitle className='font-headline text-base text-[#c4ffff]'>{info.title}</CardTitle>
                                <p className="text-[#aaaaaa] text-xs whitespace-pre-line leading-relaxed">
                                    {info.value}
                                </p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
                </div>
            </div>

            {/* Column 3: Social Links */}
            <div className="space-y-4 flex flex-col items-center">
                 <h2 className="font-headline text-2xl font-bold">
                    Follow <span style={{ color: '#7732a6' }}>Us</span>
                </h2>
                <div className="flex gap-3">
                {socialLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-[#bbbbbb] hover:text-[#c4ffff] transition-colors p-2 rounded-md" style={{ backgroundColor: 'rgba(196, 255, 255, 0.1)'}}>
                    <Icon name={link.icon} className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                    </Link>
                ))}
                </div>
                <div className="mt-4">
                    <Image src="/RC Updated.jpeg" alt="Researcher Connect Logo" width={200} height={200} className="object-contain bg-white rounded-md p-1" />
                </div>
            </div>
        </div>

        <div className="border-t pt-6 text-center" style={{ borderColor: 'rgba(196, 255, 255, 0.2)' }}>
            <p className="text-xs text-[#aaaaaa]">
            © Copyright {new Date().getFullYear()} - SustainTechCon by Researcher Connect Innovation & Impact Pvt Ltd
            </p>
        </div>
      </div>
    </footer>
  );
}
