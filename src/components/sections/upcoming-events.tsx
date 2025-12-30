
"use client"

import { schedules } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

export function UpcomingEvents() {
    const upcomingSchedules = schedules.slice(0, 3);

  return (
    <section id="upcoming-events" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
                Upcoming <span className="text-primary">Events</span>
            </h2>
            <Button asChild variant="link" className="text-primary">
                <Link href="/timeline">
                    View Full Timeline
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingSchedules.map((event, index) => (
            <Card key={index} className="bg-card border-l-4 border-primary shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-foreground">
                  {event.topic}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary ml-16">{event.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
