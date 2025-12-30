

"use client";

import { useState } from 'react';
import Image from 'next/image';
import { tickets } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { ShoppingCart, Star } from 'lucide-react';

export function Tickets() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState('');

    const handleGetTicket = (ticketType: string) => {
        setSelectedTicket(ticketType);
        setDialogOpen(true);
    };

    const bgImage = PlaceHolderImages.find(img => img.id === 'tickets-background');
    const ticketImage = PlaceHolderImages.find(img => img.id === 'hero-1');
    
    return (
        <section id="tickets" className="relative text-white py-20 md:py-28">
            <div className="container relative mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">
                        <span className="text-accent">Registration</span> Details
                    </h2>
                    <p className="text-lg text-primary-foreground/80 mt-2 max-w-4xl mx-auto">
                        At least one author must register for each accepted paper to ensure inclusion in the conference proceedings. Registration fee is non-refundable. For detailed guidelines, please <Link href="/registration-guidelines" className='underline hover:text-accent'>click here</Link>.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {tickets.map((ticket, index) => (
                        <div id="container-ticket" key={index}>
                            <div className="product-details">
                                <h1>{ticket.type}</h1>
                                <span className="hint-star star">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`inline-block h-5 w-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </span>
                                <p className="information">Early bird pricing available! Get your ticket now for the best price.</p>
                                <div className="control">
                                    <button className="btn-ticket" onClick={() => handleGetTicket(ticket.type)}>
                                        <span className="price">{ticket.earlyBird.usd}</span>
                                        <span className="shopping-cart"><ShoppingCart className="inline-block" /></span>
                                        <span className="buy">Buy Now</span>
                                    </button>
                                </div>
                            </div>
                            <div className="product-image">
                                <Image src={ticketImage?.imageUrl || ''} alt={ticket.type} />
                                <div className="info">
                                    <h2>Ticket Includes</h2>
                                    <ul>
                                        {ticket.features.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle className="text-primary font-headline">Registration Confirmation</AlertDialogTitle>
                    <AlertDialogDescription>
                        You have successfully simulated registering for the conference.
                        This is a demonstration and no actual registration has been made.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setDialogOpen(false)}>OK</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </section>
    );
}
