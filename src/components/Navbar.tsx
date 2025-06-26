import Link from "next/link";
import { BarChart3, AreaChart, PieChart } from "lucide-react";


export default function Navbar (){
  return (
    <nav className="w-full bg-gray-400 text-white px-6 py-4 flex justify-between items-center shadow-md fixed top-0 z-50">
        <div className="flex items-center text-2xl gap-2 font-bold">
          <PieChart className="w-6 h-6 text-blue-400"/>
          Hanny Wilson Paz
        </div>
        <div className="space-x-4 text-sm">
            <Link href="/">Inicio</Link>
            <Link href="#presentacion">Sobre mí</Link>
            <Link href="#proyectos">Proyectos</Link>
            <Link href="#habilidades">Habilidades</Link>
            <Link href="#Contacto">Contactos</Link>
        </div>
    </nav>
  )
}
