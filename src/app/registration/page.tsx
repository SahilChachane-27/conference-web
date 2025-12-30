
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Tickets } from "@/components/sections/tickets";

export default function RegistrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/30">
      <Header />
      <main className="flex-grow pt-20">
        <Tickets />
      </main>
      <Footer />
    </div>
  );
}
