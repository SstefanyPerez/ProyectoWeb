import { Users, Clock, CreditCard, AlertCircle } from 'lucide-react'

const stats = [
  { label: 'Total Estudiantes', value: '1,240', icon: Users, bg: 'from-purple-500 to-purple-600', change: '+12%' },
  { label: 'Asistencia Hoy', value: '980', icon: Clock, bg: 'from-pink-500 to-pink-600', change: '+5%' },
  { label: 'Turnos Activos', value: '5', icon: AlertCircle, bg: 'from-violet-500 to-violet-600', change: '0%' },
  { label: 'Pagos Pendientes', value: '45', icon: CreditCard, bg: 'from-fuchsia-500 to-pink-500', change: '+8' },
]

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Panel de Control</h1>
        <p className="text-gray-500 text-sm mt-1">Bienvenido de nuevo, Admin. Aquí está el resumen operativo de hoy.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, bg, change }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bg} flex items-center justify-center`}>
                <Icon size={20} className="text-white" />
              </div>
              <span className="text-xs text-green-500 font-medium">{change}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
