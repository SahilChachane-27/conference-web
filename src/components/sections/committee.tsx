
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { committeeData } from "@/lib/data";
import { UserCheck, Users, Shield, Star, Award, Phone } from "lucide-react";

const iconMap = {
  'Chief Patron': Shield,
  'Patrons': Star,
  'General Chief': UserCheck,
  'Convener': Award,
  'Co- Convener': Award,
  'Advisory Committee member': Users,
  'Correspondence Contact': Phone,
};

const CommitteeList = ({ title, members }: { title: string, members: { name: string, role: string }[] }) => {
    const Icon = iconMap[title as keyof typeof iconMap] || Users;
    
    return (
        <Card className="shadow-lg flex flex-col h-full">
            <CardHeader>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <ul className="space-y-3 text-muted-foreground">
                    {members.map((member, index) => (
                        <li key={index}>
                            <p className="font-semibold text-foreground">{member.name}</p>
                            <p className="text-sm">{member.role}</p>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export function Committee() {
  return (
    <section id="committee" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Organizing</span> Committee
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Meet the dedicated team behind SustainTechCon 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* Top-level leadership */}
            <CommitteeList title={committeeData.chiefPatrons.title} members={committeeData.chiefPatrons.members} />
            <CommitteeList title={committeeData.generalChief.title} members={committeeData.generalChief.members} />
            <CommitteeList title={committeeData.convener.title} members={committeeData.convener.members} />

            {/* Patrons */}
            <div className="lg:col-span-3">
                <CommitteeList title={committeeData.patrons.title} members={committeeData.patrons.members} />
            </div>

            {/* Advisory Committee */}
            <div className="lg:col-span-3">
                <CommitteeList title={committeeData.advisoryCommittee.title} members={committeeData.advisoryCommittee.members} />
            </div>
            
            {/* Co-convener and Contacts */}
            <CommitteeList title={committeeData.coConvener.title} members={committeeData.coConvener.members} />
            <div className="lg:col-span-2">
                <CommitteeList title={committeeData.correspondenceContact.title} members={committeeData.correspondenceContact.members} />
            </div>
        </div>
      </div>
    </section>
  );
}
