import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-ocean-blue to-tropical">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-2xl text-white mb-8">Página no encontrada</p>
      <Link to="/" className="bg-white text-ocean-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
        Volver al Inicio
      </Link>
    </div>
  )
}
