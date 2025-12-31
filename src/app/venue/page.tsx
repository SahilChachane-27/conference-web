
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building } from "lucide-react";

export default function VenuePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-grow pt-28 md:pt-36">
        <div className="container mx-auto px-4 md:px-6 py-12">
          {/* Page Title */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
              Conference Venue
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the location, facilities, and map for SustainTechCon 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
            {/* Left Column: Details */}
            <div className="space-y-8">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/college.JPG"
                  alt="Conference Venue"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg mt-1">
                          <Building className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                          <CardTitle className="font-headline text-2xl">Vasantdada Patil Pratishthan’s College of Engineering and Visual Arts</CardTitle>
                      </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <p>
                    Vasantdada Patil Education Complex, Eastern Express Hwy, near Everard Nagar, Chunabhatti, Sion, Mumbai, Maharashtra 400022
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Map */}
            <div className="w-full h-[450px] lg:h-full lg:min-h-[600px] rounded-2xl overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-2xl transition-shadow duration-300 sticky top-28">
              <iframe
                title="Vasantdada Patil Pratishthan Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.302214523575!2d72.87585417524969!3d19.050445682148826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c7fb7cb41d%3A0xd2376785df725550!2sVasantdada%20Patil%20Pratishthan's%20College%20of%20Engineering%20and%20visual%20arts!5e0!3m2!1sen!2sin!4v1766838713416!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
