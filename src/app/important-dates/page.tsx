
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { schedules } from "@/lib/data";
import { Calendar } from "lucide-react";

export default function ImportantDatesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-28 md:pt-36">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
              Conference Timeline
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our journey from paper submissions to the main event. Here are the key dates and milestones for SustainTechCon 2026.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Desktop timeline */}
            <div className="hidden md:flex items-start justify-center">
              <div className="relative w-full">
                <div className="absolute top-4 left-0 w-full h-0.5 bg-border"></div>
                <div className="flex justify-between relative">
                  {schedules.map((item, index) => (
                    <div key={index} className="flex-1 min-w-0">
                      <div className="relative z-10 flex flex-col items-center pt-4">
                        <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center -mt-4">
                            <div className="w-4 h-4 bg-primary rounded-full"></div>
                        </div>
                        <div className="mt-4 text-center px-2">
                          <p className="font-bold text-lg text-foreground">{item.topic}</p>
                          <p className="text-primary font-semibold">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden relative max-w-2xl mx-auto">
              <div className="absolute left-4 h-full w-0.5 bg-border" aria-hidden="true"></div>
              <div className="relative space-y-12 pl-12">
                {schedules.map((item, index) => (
                  <div key={index} className="relative">
                     <div className="absolute -left-16 top-0 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                            <Calendar className="h-4 w-4 text-primary-foreground" />
                        </div>
                    </div>
                    <div className="bg-card p-5 rounded-lg shadow-md border border-border/50">
                        <p className="text-xl font-bold text-foreground mb-1">{item.topic}</p>
                        <p className="text-primary font-semibold text-md">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
