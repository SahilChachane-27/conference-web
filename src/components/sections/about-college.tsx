import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutCollege() {
    const collegeImage = PlaceHolderImages.find(img => img.id === 'college-building');

  return (
    <section id="about-college" className="relative py-20 md:py-28">
        {collegeImage && (
            <Image
                src="/college.JPG"
                alt="Vasantdada Patil Pratishthan’s College of Engineering & Visual Arts"
                fill
                className="object-cover"
                data-ai-hint={collegeImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/70" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex justify-center">
            <Card className="max-w-3xl bg-background/80 backdrop-blur-sm shadow-2xl">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl md:text-4xl font-bold text-center">
                        About the <span className="text-primary">College</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-muted-foreground space-y-4 text-justify">
                        <p>
                            Vasantdada Patil Pratishthan’s College of Engineering & Visual Arts
                            (VPPCOE&VA) formerly known as Padmabhushan Vasantdada Patil Pratishthan’s College of Engineering (PVPPCOE) is one of the top private engineering colleges
                            in Mumbai. VPPCOE&VA was established in 1990 as a humble tribute to Late
                            Padmabhushan Vasantdada Patil, by the great founder Late Manohar (Mama)
                            Phalke, ex-MLC and labour leader, who took over the task of fulfilling Late
                            Vasantdada Patil’s dreams of spreading engineering education and providing
                            top-class higher education facility to greater number of promising students in
                            science and technology.
                        </p>
                        <p>
                            The college is approved by All India Council for Technical Education (AICTE), New
                            Delhi, Directorate of Technical Education (DTE) and Directorate of Art (DOA).
                            VPPCOE&VA is accredited by NAAC with an A grade. Computer Engineering and
                            Information Technology programs of the institute are accredited by National
                            Board of Accreditation (NBA) for 3 years w.e.f. April 03, 2024.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
