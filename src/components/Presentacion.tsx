import { Linkedin } from "lucide-react"
import Link from "next/link"

function Presentacion() {
  return (
    <section id="presentacion" className="min-h-[30vh] flex flex-col items-center justify-center bg-background px-6">
        <h1 className="text-2xl text-amber-300 mb-6 py-4">Presentación</h1>
        <div className="text-center space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Hola, soy Hanny Wilson Paz</h2>
            <p className="text-lg text-white">
                 Soy Ingeniero en Informática con pasión por los datos y más de 2 años de experiencia
                  utilizando herramientas como <strong>Python</strong>, <strong>Power BI</strong>, <strong>SQL</strong> y <strong>Excel</strong> para generar soluciones
                   analíticas que impulsan decisiones de negocio.
            </p>
            {/* Lista de habilidades */}

            <ul className="list-disc list-inside text-base space-y-1 text-white">
                <li> Especialista en administración de la información de bases de datos</li>
                <li> Dominio de las principales herramientas de Data Analytics</li>
                <li> Experiencia en visualización de datos con Power BI y Tableau</li>
                <li> Conocimiento en modelado de datos y limpieza con Python y SQL</li>
                <li>Análisis de KPIs para toma de decisiones estratégicas</li>
                <li>Manejo avanzado de SQL para consultas complejas</li>
            </ul>

            {/* LinkeInd */}
            <div className="pt-4">
                <Link href={"https://www.linkedin.com/in/hanny-lopez-wilh4z2-d3v/"} className="inline-flex items-center gap-2 bg-amber-300 text-black px-4 py-2 rounded-lg hover:bg-amber-400 transition">
                    <Linkedin className=""/>
                    Conectar en LinkedIn
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Presentacion