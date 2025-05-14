import About from "@/components/about";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </Container>
  );
}
