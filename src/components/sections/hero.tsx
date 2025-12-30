
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import { heroData } from "@/lib/data";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full text-white"
    >
      <Image
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
        data-ai-hint="conference audience"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-8">
            <div className="flex justify-center mb-4">
                <Image
                src="/reframed_logo-preview.png"
                alt="SustainTechCon Logo"
                width={100}
                height={100}
                className="h-24 w-auto"
                priority
                />
            </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            {heroData.title}
          </h1>

          <p className="text-lg text-slate-200 md:text-xl lg:text-2xl max-w-2xl mx-auto">
            {heroData.subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 text-base">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              <span>{heroData.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{heroData.location}</span>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex justify-center gap-4">
                <Button asChild size="lg" variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link href="#preamble">View Highlights</Link>
                </Button>
                <Button asChild size="lg">
                    <Link href="/registration">Buy Ticket</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
