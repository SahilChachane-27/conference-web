
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function RegisterNowCta() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 md:py-24 text-center">
        <Image 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop"
            alt="Networking event"
            fill
            className="object-cover"
            data-ai-hint="conference networking"
        />
        <div className="absolute inset-0 bg-black/50" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
              Ready to Join Us?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Secure your spot at SustainTechCon 2026 and be part of the future of sustainable technology.
            </p>
            <div className="mt-8">
                <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary-foreground/50 hover:border-primary-foreground/80"
                >
                <Link href="/registration">
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
