import Link from "next/link";

const proyectos = [
    {
        titulo: "Análisis de ventas E-commerce",
        descripcion: "Exploración de datos de ventas, KPIs y visualizaciones con Python, SQL y Power BI.",
        imagen: "/images/Ecommerce.jpg",
        enlace: "/proyectos/analisis-ventas"

    },
    {
        titulo: "Análisis Hurtos en Colombia",
        descripcion: "Descripcion para este proyecto",
        imagen: "/images/Analisis_Hurto.png",
        enlace: ""

    },
    {
        titulo: "Análisis de ventas E-commerce",
        descripcion: "Exploración de datos de ventas, KPIs y visualizaciones con Python, SQL y Power BI.",
        imagen: "/images/Ecommerce.jpg",
        enlace: ""

    },

    
]

function Proyectos() {
  return (
    <section id="proyectos" className="py-16 bg-background text-center px-6">
        <h2 className="text-3xl font-bold text-amber-400 mb-12">Proyectos Realizados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {proyectos.map((proyecto, idx) => (
                <Link 
                    key={idx} 
                    href={proyecto.enlace}
                    className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition hover:scale-105"
                    >
                    <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-40 object-cover "/>
                    <div className="p-4 text-left">
                        <h2 className="text-xl font-semibold mb-2 text-white">{proyecto.titulo}</h2>
                        <p className="text-sm text-gray-600">{proyecto.descripcion}</p>
                    </div>
                </Link>
            ))}
        </div>
    </section>
  )
}

export default Proyectos