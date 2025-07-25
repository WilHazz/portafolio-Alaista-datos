import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiApachespark,
} from "react-icons/si"

import { BiBarChart, BiData } from "react-icons/bi"
import { BsBook } from "react-icons/bs"


function Herramientas() {
  return (
    <section id="habilidades" className="py-16 bg-background bg-color-background text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-8">Herramientas</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
                <SiPython className="text-5xl text-yellow-400" />
                <span className="mt-2 text-white">Python</span>
            </div>

            <div className="flex flex-col items-center">
                <BiBarChart className="text-5xl text-yellow-600" />
                <span className="mt-2 text-white">Power BI</span>
            </div> 

            <div className="flex flex-col items-center">
                <BiData className="text-5xl text-red-500" />
                <span className="mt-2 text-white">SQL</span>
            </div>
            <div className="flex flex-col items-center">
                <BsBook className="text-5xl text-green-500" />
                <span className="mt-2 text-white">Excel</span>
            </div>

            <div className="flex flex-col items-center">
                <SiPandas className="text-5xl text-black dark:text-white" />
                <span className="mt-2 text-white">Pandas</span>
            </div>

            <div className="flex flex-col items-center">
                <SiNumpy className="text-5xl text-blue-500" />
                <span className="mt-2 text-white">NumPy</span>
            </div>



            <div className="flex flex-col items-center">
                <SiApachespark className="text-5xl text-orange-500" />
                <span className="mt-2 text-white">Apache Spark</span>
            </div>
        </div>
    </section>
  )
}

export default Herramientas