import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Users, MessageSquare, LogOut } from 'lucide-react'
import { useAuthStore } from '../../../features/auth/store/authStore'
import { ROUTES } from '../../constants/routes'

const adminLinks = [
  { to: ROUTES.ADMIN_DASHBOARD, icon: LayoutDashboard, label: 'Dashboard' },
  { to: ROUTES.ADMIN_STUDENTS, icon: Users, label: 'Estudiantes' },
  { to: ROUTES.ADMIN_COMMENTS, icon: MessageSquare, label: 'Comentarios' },
]

const studentLinks = [
  { to: ROUTES.STUDENT_DASHBOARD, icon: LayoutDashboard, label: 'Dashboard' },
]

interface Props {
  role: 'admin' | 'student'
}

export default function Sidebar({ role }: Props) {
  const { logout } = useAuthStore()
  const navigate = useNavigate()
  const links = role === 'admin' ? adminLinks : studentLinks

  const handleLogout = () => {
    logout()
    navigate(ROUTES.LOGIN)
  }

  return (
    <aside className="w-64 bg-gradient-to-b from-purple-700 via-purple-600 to-pink-500 flex flex-col flex-shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-bold text-lg">S</span>
        </div>
        <div>
          <p className="text-white font-bold text-lg leading-none">SICU</p>
          <p className="text-white/60 text-xs">Univ. Popular del Cesar</p>
        </div>
      </div>

      <div className="px-3 py-2 flex-1">
        <p className="text-white/40 text-xs font-semibold uppercase tracking-widest px-3 mb-2">
          {role === 'admin' ? 'Administración' : 'Mi Portal'}
        </p>
        <nav className="flex flex-col gap-1">
          {links.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-white text-purple-700 shadow-sm'
                    : 'text-white/80 hover:bg-white/15 hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-white/70 hover:bg-white/15 hover:text-white text-sm font-medium transition-all"
        >
          <LogOut size={18} />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  )
}
