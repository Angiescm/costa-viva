export default function Features() {
  const features = [
    {
      icon: '🎫',
      title: 'Pasaporte Físico',
      description: 'Recibe un pasaporte impreso con QR únicos en cada página'
    },
    {
      icon: '📱',
      title: 'Plataforma Web',
      description: 'Accede desde cualquier dispositivo a tu progreso y información'
    },
    {
      icon: '🎮',
      title: 'Gamificación',
      description: 'Colecciona sellos, completa misiones y gana recompensas'
    },
    {
      icon: '🗺️',
      title: 'Mapa Interactivo',
      description: 'Descubre negocios cercanos con promociones exclusivas'
    },
    {
      icon: '🏆',
      title: 'Recompensas',
      description: 'Canjea tus puntos por cafés, postres y más descuentos'
    },
    {
      icon: '📊',
      title: 'Panel para Negocios',
      description: 'Estadísticas reales para tomar mejores decisiones'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          ¿Qué hace a Costa Viva especial?
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Costa Viva conecta turistas con negocios locales mediante un pasaporte interactivo que recompensa cada visita.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
