import { UtensilsCrossed, Hash, UserX } from 'lucide-react'

const stats = [
  {
    label: 'Almuerzos Consumidos',
    value: '18',
    icon: UtensilsCrossed,
    bg: 'from-purple-500 to-purple-600',
    sub: 'Este mes',
  },
  {
    label: 'Turno Actual',
    value: '#3',
    icon: Hash,
    bg: 'from-pink-500 to-pink-600',
    sub: 'Turno asignado hoy',
  },
  {
    label: 'Inasistencias',
    value: '2',
    icon: UserX,
    bg: 'from-fuchsia-500 to-pink-500',
    sub: 'Este mes',
  },
]

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Mi Panel</h1>
        <p className="text-gray-500 text-sm mt-1">Bienvenido. Aquí está el resumen de tu actividad.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon, bg, sub }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${bg} flex items-center justify-center`}>
                <Icon size={20} className="text-white" />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
            <p className="text-sm text-gray-700 font-medium mt-0.5">{label}</p>
            <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
