
"use client"

import Image from 'next/image';
import { RadialBar, RadialBarChart, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import { statsData, chartConfig } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

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
            A glimpse into our past success and current booking status for SustainTechCon 2026.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Previous Attendance</CardTitle>
                    <CardDescription>Breakdown by category</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square h-[250px]"
                    >
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                        data={statsData}
                        innerRadius="30%"
                        outerRadius="80%"
                        >
                        <Tooltip content={<ChartTooltipContent />} />
                        <RadialBar dataKey="previousAttendance" background />
                        <Legend
                            iconSize={10}
                            iconType="circle"
                            layout="vertical"
                            verticalAlign="middle"
                            align="right"
                        />
                        </RadialBarChart>
                    </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
            <Card className="bg-card/60 backdrop-blur-sm border-border/50">
                <CardHeader className="items-center pb-0">
                    <CardTitle>Current Bookings</CardTitle>
                    <CardDescription>Live registration data</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                    <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square h-[250px]"
                    >
                    <ResponsiveContainer width="100%" height="100%">
                        <RadialBarChart
                        data={statsData}
                        innerRadius="30%"
                        outerRadius="80%"
                        >
                        <Tooltip content={<ChartTooltipContent />} />
                        <RadialBar dataKey="currentBookings" background />
                        <Legend
                            iconSize={10}
                            iconType="circle"
                            layout="vertical"
                            verticalAlign="middle"
                            align="right"
                        />
                        </RadialBarChart>
                    </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
