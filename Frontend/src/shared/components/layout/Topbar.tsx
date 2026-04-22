import { Bell } from 'lucide-react'
import { useAuthStore } from '../../../features/auth/store/authStore'

export default function Topbar() {
  const { username, rol } = useAuthStore()

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 flex-shrink-0">
      <p className="text-sm text-gray-400">Universidad Popular del Cesar · Sistema de Información SICU</p>
      <div className="flex items-center gap-4">
        <button className="relative text-gray-400 hover:text-purple-600 transition">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full text-white text-[10px] flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {username?.charAt(0) ?? 'U'}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{username}</p>
            <p className="text-xs text-gray-400">{rol === 'admin' ? 'Administrador' : 'Estudiante'}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
