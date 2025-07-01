import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Presentacion from "@/components/Presentacion";
import Herramientas from "@/components/Herramientas";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Banner />
      <Presentacion />
      <Herramientas />
    </main>
  
  );
}
