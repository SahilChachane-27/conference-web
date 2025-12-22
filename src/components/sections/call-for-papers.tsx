import { callForPapers } from "@/lib/data";
import { List, FileText, BookOpenCheck } from "lucide-react";

export function CallForPapers() {
  return (
    <section id="papers" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Call for <span className="text-primary">Papers</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            {callForPapers.description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Themes */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                        <List className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline">Conference Themes</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {callForPapers.themes.map((theme) => (
                        <li key={theme}>{theme}</li>
                    ))}
                </ul>
            </div>

            {/* Submission Details */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                        <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline">Submission Details</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {callForPapers.submissionDetails.map((detail) => (
                        <li key={detail}>{detail}</li>
                    ))}
                </ul>
            </div>

            {/* Publication Details */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                        <BookOpenCheck className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-headline">{callForPapers.publicationDetails.title}</h3>
                </div>
                <p className="text-muted-foreground">{callForPapers.publicationDetails.description}</p>
                <p className="font-semibold text-primary">Indexing: <span className="font-normal text-muted-foreground">{callForPapers.publicationDetails.indexing}</span></p>
            </div>
        </div>
      </div>
    </section>
  );
}
