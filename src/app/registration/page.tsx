
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Tickets } from "@/components/sections/tickets";
import "./tickets.css";

export default function RegistrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20 registration-page">
        <Tickets />
      </main>
      <Footer />
    </div>
  );
}
