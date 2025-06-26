import Link from "next/link";
import { PieChart } from "lucide-react";


export default function Navbar (){
  return (
    <nav className="w-full bg-color-background text-white px-6 py-4 flex justify-between items-center shadow-md top-0 z-50">
        <Link href="/" className="flex items-center text-2xl gap-2 font-bold hover:text-amber-300">
          <PieChart className="w-6 h-6 text-amber-300"/>
          Hanny Wilson Paz
        </Link>
        <div className="space-x-4 text-lg">
          <Link href="/" className="hover:text-amber-300 transition-colors">Inicio</Link>
          <Link href="#presentacion" className="hover:text-amber-300 transition-colors">Sobre mí</Link>
          <Link href="#proyectos" className="hover:text-amber-300 transition-colors">Proyectos</Link>
          <Link href="#habilidades" className="hover:text-amber-300 transition-colors">Habilidades</Link>
          <Link href="#Contacto" className="hover:text-amber-300 transition-colors">Contactos</Link>
        </div>
    </nav>
  )
}
