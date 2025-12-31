
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { schedules } from "@/lib/data";
import { Calendar } from "lucide-react";

export default function TimelinePage() {
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

          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
              <div className="relative space-y-16">
                {schedules.map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto text-left'}`}>
                       <div className="bg-card p-6 rounded-lg shadow-lg border-t-4 border-primary relative">
                         <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-background rounded-full border-2 border-primary ${index % 2 === 0 ? 'right-0 -mr-[33px]' : 'left-0 -ml-[33px]'}`}>
                           <div className="absolute inset-1 bg-primary rounded-full"></div>
                        </div>

                        <p className="text-primary font-semibold text-md mb-1">{item.date}</p>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.topic}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
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
                        <p className="text-primary font-semibold text-md mb-1">{item.date}</p>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.topic}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
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
