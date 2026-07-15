import Nav from "@/components/Nav";
import MobileMenu from "@/components/MobileMenu";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Treatments from "@/components/Treatments";
import Doctor from "@/components/Doctor";
import Testimonials from "@/components/Testimonials";
import PrakritiQuiz from "@/components/PrakritiQuiz";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/SiteEffects";

export default function Home() {
  return (
    <>
      <Nav />
      <MobileMenu />
      <main>
        <Hero />
        <Philosophy />
        <Treatments />
        <Doctor />
        <Testimonials />
        <PrakritiQuiz />
        <CtaBand />
      </main>
      <Footer />
      <SiteEffects />
    </>
  );
}
