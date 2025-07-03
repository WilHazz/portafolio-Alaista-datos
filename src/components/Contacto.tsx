import { Linkedin } from "lucide-react"
import Link from "next/link"

function Contacto() {
  return (
    <section 
    id="Contacto" 
    className="py-16 bg-color-background text-center px-6">
        <h2 className="text-3xl font-bold text-amber-500 mb-6">Contacto</h2>
        <p className="text-lg text-gray-200 py-4">
          Puedes conectar conmigo a través de las redes o por correo electrónico.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link href={"https://www.linkedin.com/in/hanny-lopez-wilh4z2-d3v/"} className="inline-flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition">
            <Linkedin />
              LinkedIn
          </Link>
          <a href="mailto:hwpazz@gmail.com" className="inline-flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition">
            hwpazz@gmail.com
          </a>
        </div>
    </section>
  )
}

export default Contacto