"use client"

import Image from 'next/image';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { rolesData, experienceData, businessTypesData, COLORS } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Users } from 'lucide-react';


const CustomLegend = ({ payload, title }: { payload: any[], title: string }) => {
    return (
        <div className="rounded-lg bg-card/80 p-4">
            <h4 className="font-bold text-lg mb-2 text-foreground">{title}</h4>
            <ul className="space-y-2">
                {payload.map((entry, index) => (
                    <li key={`item-${index}`} className="flex items-center text-sm">
                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
                        <span className='text-muted-foreground'>{entry.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const DonutChart = ({ data, title }: {data: any[], title: string}) => {
    const legendPayload = data.map((entry, index) => ({
        value: entry.name,
        type: 'square',
        color: COLORS[index % COLORS.length],
    }));

    return (
         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <div className="w-full h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip content={<ChartTooltipContent />} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div>
                <CustomLegend payload={legendPayload} title={title} />
            </div>
        </div>
    )
}

export function Stats() {
    const bgImage = PlaceHolderImages.find(img => img.id === 'stats-background');

  return (
    <section id="stats" className="relative py-20 md:py-28 text-white">
        {bgImage && (
            <Image
                src={bgImage.imageUrl}
                alt={bgImage.description}
                fill
                className="object-cover"
                data-ai-hint={bgImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-background/90" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Conference <span className="text-primary">in Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            A glimpse into our past success and attendee demographics.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-end">
                        <Users size={64} className="text-primary" />
                        <Users size={80} className="text-primary" />
                        <Users size={64} className="text-primary" />
                        <Users size={64} className="text-primary" />
                    </div>
                    <p className="text-2xl font-bold mt-4 text-foreground">1 in 4 Attended for First Time</p>
                </div>
                 <DonutChart data={rolesData} title="Various Roles" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <DonutChart data={experienceData} title="All Experience Levels" />
                 <DonutChart data={businessTypesData} title="Business Types (Primary)" />
            </div>
        </div>

      </div>
    </section>
  );
}
