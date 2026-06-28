export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">🌴 Costa Viva</h3>
            <p className="text-gray-400">Pasaporte turístico inteligente para Santa Elena</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Para Turistas</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Explorar Rutas</a></li>
              <li><a href="#" className="hover:text-white">Ver Negocios</a></li>
              <li><a href="#" className="hover:text-white">Centro de Ayuda</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Para Negocios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Únete a Costa Viva</a></li>
              <li><a href="#" className="hover:text-white">Panel de Control</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legales</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Privacidad</a></li>
              <li><a href="#" className="hover:text-white">Términos</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Costa Viva. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
