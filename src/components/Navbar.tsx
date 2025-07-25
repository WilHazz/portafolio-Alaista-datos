"use client";

import Link from "next/link";
import { PieChart } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";


function Navbar (){

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-background text-white top-0 left-0 z-50 shadow-md">
       <div className="flex justify-between px-6 py-4 items-center">
          <Link href="/" className="flex items-center text-2xl gap-2 font-bold hover:text-amber-300">
            <PieChart className="w-6 h-6 text-amber-300"/>
            Hanny Wilson Paz
          </Link>

        {/* Botón hamburguesa visible solo para mobile */}
        <button onClick={toggleMenu} className="text-amber-300 md:hidden focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-4 text-lg">
          <Link href="/" className="hover:text-amber-300 transition-colors">Inicio</Link>
          <Link href="#presentacion" className="hover:text-amber-300 transition-colors">Sobre mí</Link>
          <Link href="#proyectos" className="hover:text-amber-300 transition-colors">Proyectos</Link>
          <Link href="#habilidades" className="hover:text-amber-300 transition-colors">Habilidades</Link>
          <Link href="#Contacto" className="hover:text-amber-300 transition-colors">Contacto</Link>
        </div>

        </div> 

        {/* Menú Mobile */}
      {isOpen && (
        <div className="w-full 
           px-6 pb-4 space-y-3 text-center animate-slide-downmd:hidden"
           >
          <Link href="/" onClick={toggleMenu} className="block hover:text-amber-300">Inicio</Link>
          <Link href="#presentacion" onClick={toggleMenu} className="block hover:text-amber-300">Sobre mí</Link>
          <Link href="#proyectos" onClick={toggleMenu} className="block hover:text-amber-300">Proyectos</Link>
          <Link href="#habilidades" onClick={toggleMenu} className="block hover:text-amber-300">Habilidades</Link>
          <Link href="#contacto" onClick={toggleMenu} className="block hover:text-amber-300">Contacto</Link>
        </div>
      )}
      
    </nav>
  )
}

export default  Navbar;