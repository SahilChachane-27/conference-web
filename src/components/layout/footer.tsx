import Link from 'next/link';
import Image from 'next/image';
import { socialLinks, contactInfo } from '@/lib/data';
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
        <div className="grid md:grid-cols-5 gap-12 items-center mb-12">
            <div className="md:col-span-2 space-y-4">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    Get in <span className="text-accent">Touch</span>
                </h2>
                <p className="text-lg text-white/80">
                    We're here to help with any questions you may have. Reach out to us and we'll get back to you as soon as possible.
                </p>
            </div>
            <div className="md:col-span-3">
                <div className="space-y-6">
                {contactInfo.map((info) => (
                    <Card key={info.title} className="bg-card/20 backdrop-blur-sm text-card-foreground border-l-4 border-accent shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-center gap-4 p-4">
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                                <Icon name={info.icon} className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <CardTitle className='font-headline text-xl text-white'>{info.title}</CardTitle>
                                <p className="text-white/80 text-sm whitespace-pre-line leading-relaxed">
                                    {info.value}
                                </p>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
                </div>
            </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
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
      </div>
    </footer>
  );
}
