import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Timeline from "@/components/Timeline";
import Philosophy from "@/components/Philosophy";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Header />
      <Hero />
      <Work />
      <Timeline />
      <Footer />
    </main>
  );
}
