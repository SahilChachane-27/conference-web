
"use client"

import { schedules } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export function UpcomingEvents() {
    const upcomingSchedules = schedules.slice(0, 3);

  return (
    <section id="upcoming-events" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Upcoming <span className="text-primary">Events</span>
            </h2>
            <Button asChild variant="link" className="text-primary">
                <Link href="/important-dates">
                    View Full Timeline
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>

        <div className="relative max-w-lg mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -z-1" aria-hidden="true" />
          <div className="space-y-12">
            {upcomingSchedules.map((event, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-1 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                    <Calendar className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
                <div className="bg-card p-5 rounded-lg shadow-md border border-border/50">
                    <p className="text-primary font-semibold mb-1">{event.date}</p>
                    <h3 className="text-lg font-bold font-headline text-foreground">{event.topic}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
