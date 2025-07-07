import Link from "next/link"
import { FaGithub } from "react-icons/fa" 

function page() {
  return (
    <section className="bg-color-background text-centerpb-20">
        <div className="relative ">
         <img src="/images/Banner_Datos.png" className="h-[50vh] md:h-[60vh] w-full object-cover" alt="Análisis de ventas E-commerce" />   
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center px-4 text-white">
                Análisis de ventas E-commerce
            </h1>

        </div>
        </div>
        <div className="max-w-4xl mx-auto py-12 px-6 text-center">

        <p className="text-lg text-white">
           Este proyecto consiste en el análisis de datos de ventas de una tienda e-commerce ficticia. 
            Se utilizaron herramientas como <strong>Python, SQL Server y Power BI</strong> para extraer, transformar y visualizar los datos. 
            Con Python se emplearon librerías especializadas como <strong>Pandas</strong> para el procesamiento de datos, 
            <strong> Matplotlib</strong> y <strong>Seaborn</strong> para la generación de gráficos y visualizaciones analíticas.
        </p>
        </div>

        {/* Resumen Ejecutivo */}
        <div className="max-w-4xl mx-auto text-left px-6 space-y-6">
            <h2 className="text-2xl font-bold text-amber-400">Resumen Ejecutivo</h2>
            <p>
                La tienda e-commerce ha presentado dificultades para comprender el comportamiento de sus ventas, 
                especialmente en cuanto a qué productos generan mayores ingresos, cuáles presentan bajo rendimiento 
                y qué segmentos de clientes son más rentables.
            </p>
            <p>
                El análisis de datos permitió responder preguntas clave como: ¿cuáles son los productos más vendidos?, 
                ¿qué segmentos y regiones generan más ingresos?, y ¿existen patrones de estacionalidad?
        </p>
        </div>

        {/* Insights */}
        <div className="max-w-4xl mx-auto text-left py-12 px-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Producto Estrella</h2>
            <p className="mb-6 text-lg">
                El producto mas vendido fue <strong>CornflowerBlue Record</strong> con mas de <strong>195 unidades. </strong> 
                Esto indica una fuerte aceptación del mercado y representa una oportunidad para promocionarlo aún más.
            </p>
            <img
            src="/images/Producto.png" 
            alt="Producto mas vendido"
            className="w-full h-auto"
             />
        </div>
        {/* Boton a Github */}
        <div className="text-center pt-12">
            <Link href="https://github.com/WilHazz/Analisis_Ecommerce" target="_blank">
            <button className="inline-flex items-center text-center justify-center bg-amber-400 text-black font-semibold px-6 py-3 cursor-pointer rounded-3xl crounded-lg hover:bg-amber-500 transition gap-3">
               <FaGithub className="text-3xl"/> 
               Ver proyecto
            </button>
            </Link>
        </div>
    </section>
  )
}

export default page