import Navbar from "@/components/sekoba/navbar";
import Hero from "@/components/sekoba/hero";
import About from "@/components/sekoba/about";
import Services from "@/components/sekoba/services";
import Gallery from "@/components/sekoba/gallery";
import Testimonials from "@/components/sekoba/testimonials";
import Newsletter from "@/components/sekoba/newsletter";
import Contact from "@/components/sekoba/contact";
import Footer from "@/components/sekoba/footer";

export default function Home() {
  return (
    <div className="bg-cream-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
