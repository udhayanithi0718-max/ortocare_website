import Hero from "@/components/home/Hero";
import Specialties from "@/components/home/Specialties";
import RoboticTherapy from "@/components/home/RoboticTherapy";
import ContactSection from "@/components/home/ContactSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div id="treatments">
          <Specialties />
        </div>
        <div id="technology">
          <RoboticTherapy />
        </div>
        <ContactSection />
      </main>
      <WhatsAppButton />
      
      <footer className="py-12 border-t border-border bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start leading-none">
            <span className="text-xl font-bold tracking-tight text-primary">Orthocare</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Physiotherapy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Orthocare Physiotherapy Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
