import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Experience } from "@/components/home/Experience";
import { TechStack } from "@/components/home/TechStack";
import { Achievements } from "@/components/home/Achievements";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <Experience />
        <TechStack />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
