
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
            <div className="hidden md:flex items-center">
              {schedules.map((item, index) => (
                <div key={index} className="flex-1 relative">
                  {/* Line */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border transform -translate-y-1/2"></div>
                   {/* Circle and Content */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-primary rounded-full"></div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-bold text-lg text-foreground">{item.topic}</p>
                      <p className="text-primary font-semibold">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile timeline */}
            <div className="md:hidden relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
              <div className="relative space-y-12">
                {schedules.map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`flex items-center justify-center w-full`}>
                      <div className="w-full p-4">
                        <div className={`bg-card p-6 rounded-lg shadow-lg border-l-4 border-primary relative ml-8`}>
                          <div className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-primary rounded-full left-0 -ml-10`}>
                            <div className="absolute inset-0.5 bg-background rounded-full"></div>
                          </div>
                          <p className="text-xl font-bold text-foreground mb-1">{item.topic}</p>
                          <p className="text-primary font-semibold text-md mb-3">{item.date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-background rounded-full flex items-center justify-center border-2 border-border md:hidden">
                          <Calendar className="h-5 w-5 text-primary" />
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
