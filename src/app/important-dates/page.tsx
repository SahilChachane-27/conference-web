
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

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>

            <div className="relative space-y-12">
              {schedules.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex items-center justify-center w-full ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="w-full md:w-1/2 p-4">
                      <div className={`bg-card p-6 rounded-lg shadow-lg border-l-4 border-primary relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-primary rounded-full hidden md:block ${index % 2 === 0 ? 'right-0 -mr-10' : 'left-0 -ml-10'}`}>
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
      </main>
      <Footer />
    </div>
  );
}
