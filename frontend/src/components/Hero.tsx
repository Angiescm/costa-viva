export default function Hero() {
  return (
    <section className="bg-gradient-ocean text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
          <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explora, Descubre y Gana
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Recorre la provincia de Santa Elena con nuestro pasaporte turístico inteligente
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-3 bg-white text-ocean-blue font-semibold rounded-lg hover:shadow-lg transition">
              Explorar Rutas
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition">
              Ver Negocios
            </button>
            <button className="px-8 py-3 bg-tropical text-white font-semibold rounded-lg hover:shadow-lg transition">
              Registrar Pasaporte
            </button>
          </div>

          {/* Image placeholder */}
          <div className="bg-white bg-opacity-20 rounded-lg overflow-hidden h-96 md:h-96 backdrop-blur-sm">
            <div className="w-full h-full flex items-center justify-center text-3xl">
              📸 Imagen panorámica de Santa Elena
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
