import About from "@/components/About";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import FAQS from "@/components/Faqs";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Services />
      <AboutUs />
      <Testimonials />
      <FAQS />
      <Footer />
    </Container>
  );
}
