import Link from "next/link"
import { FaGithub } from "react-icons/fa" 


function page(){
    return(
        <section className="bg-background text-centerpb-20">
             <div className="relative ">
         <img src="/images/Banner_Datos.png" className="h-[50vh] md:h-[60vh] w-full object-cover" alt="Análisis de ventas E-commerce" />   
        <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center px-4 text-white">
                Análisis de Hurtos en Colombia
            </h1>
        </div>
        </div>

        <div className="max-w-4xl mx-auto py-12 px-6 text-center">
            <p className="text-lg text-white">
            Este proyecto analiza los reportes de hurtos en Colombia con datos proporcionados por el gobierno de datos libres de Colombia.
            Se utilizaron herramientas como <strong>Python</strong>, <strong>Pandas</strong> y <strong>Plotly </strong> 
            para la exploración y visualización de datos, y se construyó un dashboard en <strong>Look Studio </strong> 
            para mostrar los hallazgos.
            </p>
        </div>

         {/* Resumen Ejecutivo */}
        <div className="w-full mx-auto text-left px-10 py-4">
            <h2 className="text-4xl font-bold text-amber-400 mb-6">Resumen Ejecutivo</h2>
            <p className="mb-4 text-lg text-white">
                En Colombia, los hurtos representan uno de los delitos con mayor impacto social, pero su análisis detallado ha sido limitado por la 
                dispersión y complejidad de los datos. Este proyecto busca comprender el comportamiento de los hurtos 
                en el país a través de un análisis exploratorio de los registros reportados por el gobierno de datos libres de Colombia.
            </p>
            <p className="text-white">
                <ul className="">
                    <li>¿Qué grupos de edad y género son más vulnerables?</li>
                    <li>¿En qué regiones y meses se presentan más casos?</li>
                    <li>¿Cuál es la relación entre el uso de armas y los tipos de hurto?</li>
                    <li>¿Existen patrones en la estacionalidad o en los métodos utilizados?</li>
                </ul>
        </p>
        </div>

         {/* Insights */}
        <div className="w-full mx-auto text-left px-10 py-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Objeto más robado</h2>
            <p className="mb-6 text-lg text-white">
                El objeto con más frecuencia  hurtado fue la <strong>motocicleta</strong>, con más de <strong>447499 registros</strong> durante el periodo analizado.
                Este resultado evidencia la alta vulnerabilidad de este tipo de vehículo frente a los delincuentes, y sugiere la urgencia de implementar medidas de 
                control más efectivas, como zonas seguras de parqueo, campañas de marcación y vigilancia reforzada en sectores críticos.
            </p>
            <div className="flex justify-center">
                <img
                    src="/images/Proyecto_Hurtos/Tipo_hurto.png" 
                    alt="Producto mas vendido"
                    className="w-full max-w-xl h-auto shadow-md"
                />
            </div>
        </div>

         {/* Hallazgos Clave */}
         <div className="w-full mx-auto text-left px-10 py-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">
                Hallazgos Clave
            </h2>
            <p className="mb-6 text-lg text-white">
                A través de visualizaciones exploratorias, se identificaron patrones clave en los hurtos reportados. Estas gráficas permiten comprender mejor la magnitud, evolución y características del delito en Colombia.
            </p>
            {/* Gráfica 1: Top 10 tipos de hurtos */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center">
                    <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2 text-white">Medida 1</h3>
                    <img 
                    src="/images/Proyecto_Hurtos/top10.png" 
                    alt="Top 10 tipos de hurto" 
                    className="w-[400px] md:w-[480px] rounded-lg shadow-md" />

                    </div>
                    <p className="text-gray-400 mt-2 text-justify">
                        Esta gráfica muestra los 10 tipos de hurto más frecuentes, permitiendo identificar los métodos más usados por los delincuentes en Colombia.
                    </p>
                </div>
                
            <div>
            {/* Gráfica 2: Evolución anual de hurtos */}
            <div className="flex flex-col md:flex-row gap-6 mb-12 items-center">
                <div className="flex flex-col items-center">

                <h3 className="text-xl font-semibold mb-2 text-white">Medida 2</h3>

                <img
                    src="/images/Proyecto_Hurtos/EvolucionAnual.png"
                    alt="Evolución anual de hurtos"
                    className="w-[400px] md:w-[460px] rounded-lg shadow-md"
                />
                </div>
                <p className="text-gray-400 md:w-1/2 text-justify">
                    Se observa cómo ha variado el número de hurtos año tras año,
                    evidenciando posibles aumentos o reducciones en el delito a nivel nacional.
                </p>
            </div>
            {/* Gráfica 2: Evolución anual de hurtos */}
            <div className="flex flex-col md:flex-row gap-6 mb-12 items-center">
                <div className="flex flex-col items-center">

                <h3 className="text-xl font-semibold mb-2 text-white">Medida 3</h3>

                <img
                    src="/images/Proyecto_Hurtos/armas_usadas.png"
                    alt="Evolución anual de hurtos"
                    className="w-[400px] md:w-[460px] rounded-lg shadow-md"
                />
                </div>
                <p className="text-gray-400 md:w-1/2 text-justify">
                   Esta visualización presenta la distribución de los hurtos según el tipo de arma empleada, 
                   destacando la peligrosidad y modalidad de los hechos.
                </p>
            </div>

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
                        src="/images/Proyecto_Hurtos/departamentos.png" 
                        alt="Top 10 departamentos con más hurtos"
                        className="w-full h-auto object-containt p-4"
                        />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-white">Medida 1</h3>
                        <p className="text-sm text-white">
                            Los departamentos con mayores índices de hurto son <strong>Antioquia</strong>, 
                            <strong>Cundinamarca</strong> y <strong>Valle del Cauca</strong>. Se recomienda 
                            <strong>reforzar la presencia policial</strong>, instalar cámaras de vigilancia y 
                            promover campañas de cultura ciudadana en estas zonas.
                        </p>
                    </div>    
                </div>
                {/* Medida 2 */}
                <div className="shadow-lg overflow-hidden">
                    <img 
                        src="/images/Proyecto_Hurtos/hurtos_grupoEdad.png" 
                        alt="Hurtos grupo edad"
                        className="w-full h-auto object-containt p-4"
                        />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-white">Medida 2</h3>
                        <p className="text-sm text-white">
                            Se observa que los <strong>adultos y mayores </strong> 
                            son más vulnerables a ciertos tipos de hurto. Se recomienda implementar 
                            <strong>estrategias de protección diferenciadas</strong> para cada grupo etario, 
                            como campañas de concientización, mayor presencia policial en horarios clave y 
                            programas educativos de prevención.
                        </p>
                    </div>    
                </div>
                {/* Medida 3 */}
                <div className="shadow-lg overflow-hidden">
                    <img 
                        src="/images/Proyecto_Hurtos/Hurtos_edad_vitimas.png" 
                        alt="Hurtos edad victima"
                        className="w-full h-auto object-containt p-4"
                        />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-white">Medida 3</h3>
                        <p className="text-sm text-white">
                            Esta visualización muestra cómo varían los <strong>tipos de hurto </strong> 
                            según el grupo de edad de las <strong>víctimas</strong>. 
                            Se evidencia que ciertos delitos como el 
                            <strong> hurto de celulares o motocicletas </strong> 
                            son más comunes en jóvenes, mientras que en adultos mayores predominan delitos como el 
                            <strong> robo de vehículos, motocicletas o atracos callejeros</strong>. Estos datos permiten diseñar 
                            <strong> estrategias específicas de prevención y vigilancia</strong> para cada grupo etario.
                        </p>
                    </div>    
                </div>
            </div>
         </div>

         {/* Boton a Github */}
        <div className="text-center pt-12 py-4">
            <Link href="https://github.com/WilHazz/Analisis-Datos-Hurtos" target="_blank">
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