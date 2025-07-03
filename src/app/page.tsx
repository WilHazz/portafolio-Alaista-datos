import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Presentacion from "@/components/Presentacion";
import Herramientas from "@/components/Herramientas";
import Proyectos from "@/components/Proyectos";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <Presentacion />
      <Herramientas />
      <Proyectos />
      <Contacto />
      <Footer />
    </main>
  
  );
}
