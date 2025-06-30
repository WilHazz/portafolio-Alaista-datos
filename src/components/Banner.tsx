

function Banner() {
  return (
    <section 
    id="inicio" 
    className="pt-24 h-[50vh] bg-[url('/images/Banner_Datos.png')] bg-cover bg-center flex items-center justify-center text-center text-white px-6"
    >
      <div className="">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hola, soy Hanny Wilson Paz
        </h1>
        <p className="text-lg max-w-xl">
          +2 años de experiencia utilizando Python, Power BI, SQL y herramientas para el análisis de datos.
        </p>
      </div>
    </section>
  )
}

export default Banner