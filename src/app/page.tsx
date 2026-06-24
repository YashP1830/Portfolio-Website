import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Header />
      <Hero />
      <Work />
      <Footer />
    </main>
  );
}
