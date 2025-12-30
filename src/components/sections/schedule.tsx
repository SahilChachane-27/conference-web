
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { schedules } from '@/lib/data';
import { Calendar } from "lucide-react";

export function Schedule() {
  return (
    <section id="schedules" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Important</span> Dates
          </h2>
          <p className="text-lg text-muted-foreground mt-3">
            Mark your calendar for these key submission and event dates to ensure you don&apos;t miss any deadlines for SustainTechCon 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {schedules.map((schedule, index) => (
            <Card key={index} className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center bg-card">
                <CardHeader>
                    <div className="flex justify-center">
                        <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <Calendar className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                    <p className="text-2xl font-bold font-headline text-primary mb-2">{schedule.date}</p>
                    <h3 className="text-xl font-bold text-foreground">{schedule.topic}</h3>
                </CardContent>
            </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
