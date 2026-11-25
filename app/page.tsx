import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Studio from "@/components/Studio";
import Work from "@/components/Work";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Studio />
        <Work />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
