import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { schedules } from '@/lib/data';

export function Schedule() {
  return (
    <section id="schedules" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Important</span> Dates
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Mark your calendar for these key submission and event dates.
          </p>
        </div>

        <Tabs defaultValue="day-0" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
            {schedules.map((day, index) => (
              <TabsTrigger key={day.day} value={`day-${index}`} className="flex flex-col p-3 h-auto">
                <span className="font-bold text-lg">{day.day}</span>
                <span className="text-xs text-muted-foreground">{day.date}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {schedules.map((day, index) => (
            <TabsContent key={day.day} value={`day-${index}`} className="mt-8">
              <div className="space-y-8">
                {day.events.map((event) => (
                    <div key={event.topic} className="flex flex-col md:flex-row items-center gap-6 p-6 bg-card rounded-lg shadow-sm text-center">
                      <div className="w-full">
                        <h3 className="text-xl md:text-2xl font-bold font-headline mb-2 text-primary">{event.topic}</h3>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
