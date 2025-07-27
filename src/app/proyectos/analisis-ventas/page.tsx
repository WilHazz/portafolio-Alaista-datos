import Link from "next/link"
import { FaGithub } from "react-icons/fa" 

function page() {
  return (
    <section className="bg-background text-centerpb-20">
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
        <div className="w-full mx-auto text-left px-10 py-4">
            <h2 className="text-4xl font-bold text-amber-400 mb-6">Resumen Ejecutivo</h2>
            <p className="mb-4 text-lg text-white">
                La tienda e-commerce ha presentado dificultades para comprender el comportamiento de sus ventas, 
                especialmente en cuanto a qué productos generan mayores ingresos, cuáles presentan bajo rendimiento 
                y qué segmentos de clientes son más rentables.
            </p>
            <p className="text-white">
                El análisis de datos permitió responder preguntas clave como: ¿cuáles son los productos más vendidos?, 
                ¿qué segmentos y regiones generan más ingresos?, y ¿existen patrones de estacionalidad?
        </p>
        </div>

        {/* Insights */}
        <div className="w-full mx-auto text-left px-10 py-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Producto Estrella</h2>
            <p className="mb-6 text-lg text-white">
                El producto mas vendido fue <strong>CornflowerBlue Record</strong> con mas de <strong>195 unidades. </strong> 
                Esto indica una fuerte aceptación del mercado y representa una oportunidad para promocionarlo aún más.
            </p>
            <div className="flex justify-center">
                <img
                    src="/images/Proyecto_Ecommerce/producto.png" 
                    alt="Producto mas vendido"
                    className="w-full max-w-3xl h-auto shadow-md"
                />
            </div>
        </div>
        {/* Acciones y Recomendaciones */}
        <div className="w-full mx-auto text-left px-10 py-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">
                Acciones y Recomendaciones
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Medida 1 */}
                <div className="shadow-lg overflow-hidden">
                    <img
                     src="/images/Proyecto_Ecommerce/ventas_por_categoria.PNG"
                     alt="ventas por categoria"
                     className="w-full h-auto object-containt p-4" 
                     />
                     <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-white">Medida 1</h3>
                        <p className="text-sm text-white">
                            Enfocar campañas de marketing para las categorías <strong>Deportes</strong> y <strong>Electrónicos</strong>,
                            ya que presenta las menores ventas.
                        </p>
                     </div>
                </div>
                {/* Medida 2 */}
                <div className="shadow-lg overflow-hidden">
                    <img
                     src="/images/Proyecto_Ecommerce/Tendencias-Ventas-Mes.PNG"
                     alt="Tendencias ventas por mes"
                     className="w-full h-auto object-containt p-4" 
                     />
                     <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-white">Medida 2</h3>
                        <p className="text-sm text-white">
                            Ajustar estrategias de marketing en función de la <strong>estacionalidad</strong>.
                            Se observan picos de ventas en los meses <strong>1, 5, 8 y 11</strong>, y caídas importantes
                            en los meses <strong>4, 7 y 10</strong>. Esto indica la necesidad de impulsar promociones
                            específicas durante los meses de baja demanda para mantener ingresos estables.
                        </p>
                     </div>
                </div>
                {/* Medida 3 */}
                <div className="shadow-lg overflow-hidden">
                    <img
                     src="/images/Proyecto_Ecommerce/Ventas_por_segmento.PNG"
                     alt="ventas por segmento de cliente"
                     className="w-full h-auto object-containt p-4" 
                     />
                     <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-white">Medida 3</h3>
                        <p className="text-sm text-white">
                            El segmento <strong>Minorista</strong> y <strong>Premium</strong> lideran las ventas.
                            Se recomienda <strong>fortalecer las relaciones con el segmento Mayorista</strong>, que
                            muestra un desempeñoinferior, mediante programas de fidelización o descuentos 
                            por volumen para incentivar su participación.
                        </p>
                     </div>
                </div>
            </div>
        </div>
        {/* Matriz De Correlación */}
        <div className="w-full mx-auto text-left px-10 py-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4 py-4">
                Análisis de Correlación
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <h3 className="flex flex-col text-center text-white">Medida 4</h3>
                    <img 
                    src="/images/Proyecto_Ecommerce/MatrizCorrelacion.png" 
                    alt="Matriz de Correlación" 
                    className="w-full h-auto object-containt p-4"
                    />
                </div>

                {/* Texto Derecha */}
                <div className="w-full md:w-1/2 space-y-4 text-left text-white">
                    <p className="text-lg">
                        Esta matriz de correlación revela cómo se relacionan las variables <strong>cantidad</strong>, 
                        <strong>precio_unitario</strong> y <strong>total</strong> de ventas.
                    </p>
                    <ul className="list-disc ml-6 text-base space-y-2">
                        <li>
                            La correlación entre <strong>precio_unitario </strong>
                            y <strong>total</strong> es <strong>0.72</strong>, indicando que
                            <strong> el precio influye más que la cantidad </strong> en las ventas totales.
                        </li>
                        <li>
                            La correlación entre <strong>cantidad</strong> y <strong> precio_unitario </strong> 
                            es casi nula (<strong>0.068</strong>), es decir: <em>no necesariamente venderás menos 
                            si subes el precio</em>.
                        </li>
                        <li>
                            La relación entre <strong>cantidad</strong> y <strong>total</strong> es 
                            <strong> 0.65</strong>, mostrando que el volumen vendido también impacta los ingresos.
                        </li>
                    </ul>
                    <p className="text-lg font-medium text-amber-300 mt-4">
                        Conclusiones Estratégicas:
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                        <li>Puedes aumentar precios moderadamente sin afectar mucho la demanda.</li>
                        <li>No hay evidencia clara de bajar precios aumente ventas.</li>
                        <li>Optimizar tanto precio como volumen es clave para maximizar ingresos.</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* Dashboard Power BI */}
        <div className="w-full mx-auto text-left px-10 py-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4" >
                Resumen Ejecutivo del Dashboard
            </h2>
            <p className="text-lg mb-4 text-white">
                El tablero desarrollado en <strong>Power BI</strong> permite visualizar métricas
                clave como:
                <ul className="list-disc list-inside space-y-2 mt-2 text-base">
                    <li><strong>Total de Ventas:</strong> Más de $506.400.000 millones pesos Colombianos</li>
                    <li><strong>Número de Clientes:</strong> 100 Clientes registrados</li>
                    <li><strong>Ticket Promedio:</strong> $506.400.000 millones pesos Colombianos</li>
                    <li><strong>Unidades Vendidas por Producto:</strong> Identificación del producto estrella y su rotación.</li>
                    <li><strong>Tendencias de Ventas:</strong> Comportamiento mensual de las ventas.</li>
                    <li><strong>Ventas por Región:</strong> Distribución equilibrada, destacando oportunidades en ciertas zonas.</li>
                </ul>
            </p>
            <p className="text-base italic text-white">
                Este dashboard facilita la toma de decisiones al brindar una version consolidada
                del rendimineto comercial.
            </p>
             <div className=" flex mt-6 justify-center ">
                <img 
                src="/images/Proyecto_Ecommerce/Ecommerce_Bi.PNG" 
                alt="Ecommerce-PowerBI"
                className="max-w-5xl w-full h-auto border-gray-300 border-2 shadow-lg"
                />
             </div>
        </div>

        {/* KPIs - Métricas clave */}
        <div className="w-full mx-auto text-left px-10 py-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">KPIs - Métricas Clave</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-white">Producto Más Vendido</h3>
                    <p className="text-2xl font-bold text-amber-300">CornflowerBlue Record</p>
                    <p className="text-base mt-2 text-white">Cantidad vendida: <strong>199 unidades</strong></p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                     <h3 className="text-xl font-semibold mb-2 text-white">Cliente Más Valioso</h3>
                     <p className="text-2xl font-bold text-amber-300">Vickie Castillo</p>
                     <p className="text-base mt-2 text-white">Total gastado: <strong>$8,998.24</strong></p>
                </div>

                <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-white">Mes Más Fuerte en Ventas</h3>
                    <p className="text-2xl font-bold text-amber-300">Noviembre</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-center mt-8">
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-white">Segmento con Más Ingresos</h3>
                        <p className="text-2xl font-bold text-amber-300">Minorista</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2 text-white">Meses Estacionales</h3>
                        <p className="text-lg mt-2 text-amber-300">Noviembre, Enero, Mayo</p>
                    </div>
                </div>
                
            </div>

            
        </div>


        {/* Boton a Github */}
        <div className="text-center pt-12 py-4">
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