import About from "@/components/about";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import AboutUs from "@/components/aboutUs";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Services />
      <AboutUs />
      <Testimonials />
      <Footer />
    </Container>
  );
}
