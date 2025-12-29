import Link from 'next/link';
import Image from 'next/image';
import { socialLinks, contactInfo, navLinks } from '@/lib/data';
import * as Icons from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Icon = ({ name, ...props }: { name: keyof typeof Icons } & React.ComponentProps<typeof Icons.Icon>) => {
    const LucideIcon = Icons[name] as React.ComponentType<any>;
    return <LucideIcon {...props} />;
};

export function Footer() {
    const bgImage = PlaceHolderImages.find(img => img.id === 'testimonials-background');
  return (
    <footer className="relative bg-black text-white py-12 md:py-20">
       {bgImage && (
            <Image
                src={bgImage.imageUrl}
                alt={bgImage.description}
                fill
                className="object-cover"
                data-ai-hint={bgImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/80" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Contact Info */}
            <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold">
                    Get in <span className="text-accent">Touch</span>
                </h2>
                <div className="space-y-4">
                {contactInfo.map((info) => (
                    <Card key={info.title} className="bg-card/20 backdrop-blur-sm text-card-foreground border-l-4 border-accent shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-center gap-4 p-4">
                            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent/20 shrink-0">
                                <Icon name={info.icon} className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                                <CardTitle className='font-headline text-lg text-white'>{info.title}</CardTitle>
                                <p className="text-white/80 text-sm whitespace-pre-line leading-relaxed">
                                    {info.value}
                                </p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
                </div>
            </div>
            
            {/* Column 2: Navigation Links */}
            <div className="space-y-4">
                 <h2 className="font-headline text-3xl font-bold">
                    Quick <span className="text-accent">Links</span>
                </h2>
                <nav className="flex flex-col space-y-2">
                    {navLinks.map((link) => (
                        link.isDropdown ? (
                            link.subLinks?.map(subLink => (
                                <Link key={subLink.href} href={subLink.href} className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-colors">
                                    {subLink.label}
                                </Link>
                            ))
                        ) : (
                            <Link key={link.href} href={link.href} className="text-white/80 hover:text-white hover:underline underline-offset-4 transition-colors">
                                {link.label}
                            </Link>
                        )
                    ))}
                </nav>
            </div>

            {/* Column 3: Social Links */}
            <div className="space-y-4">
                 <h2 className="font-headline text-3xl font-bold">
                    Follow <span className="text-accent">Us</span>
                </h2>
                <div className="flex gap-4">
                {socialLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-md">
                    <Icon name={link.icon} className="h-6 w-6" />
                    <span className="sr-only">{link.name}</span>
                    </Link>
                ))}
                </div>
            </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-white/80">
            © Copyright {new Date().getFullYear()} - SustainTechCon by Researcher Connect Innovation & Impact Pvt Ltd
            </p>
        </div>
      </div>
    </footer>
  );
}
