import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-ocean-blue">🌴 Costa Viva</span>
        </Link>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-ocean-blue hover:text-tropical font-semibold">Iniciar Sesión</button>
          <button className="px-4 py-2 bg-gradient-ocean text-white rounded-lg hover:shadow-lg">
            Registrar
          </button>
        </div>
      </nav>
    </header>
  )
}
