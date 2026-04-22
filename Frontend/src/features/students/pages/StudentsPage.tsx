import { Search, Plus, Pencil, Trash2 } from 'lucide-react'

const students = [
  { id: 2, codigo: 'Andres Perez', carrera: 'Medicina',turno: 4,  inasistencias: 2, estado: 'Activo' },
  { id: 3, codigo: 'yaileth Maestre', carrera: 'Psicologia',turno: 3, inasistencias: 1, estado: 'Activo' },
  { id: 4, codigo: 'Bennedict Guzman', carrera: 'Arquitectura',turno: 50,  inasistencias: 3, estado: 'Suspendido' },
  { id: 5, codigo: 'Miguel Hernandez', carrera: 'Derecho',turno: 90,  inasistencias: 0, estado: 'Activo' },
  { id: 6, codigo: 'Jhon Martinez', carrera: 'Ing. Civil',turno: 40, inasistencias: 0, estado: 'Activo' },
  { id: 7, codigo: 'Linda Guzman', carrera: 'Administración',turno: 6,  inasistencias: 2, estado: 'Activo' },
]

export default function StudentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Estudiantes</h1>
          <p className="text-gray-500 text-sm mt-1">Administra el padrón de usuarios del comedor.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition shadow-md">
          <Plus size={16} />
          Nuevo Estudiante
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-5 border-b border-gray-100">
          <div className="relative max-w-sm">
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por ID o nombre..."
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 w-full bg-gray-50"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                {['#', 'Código', 'Carrera', 'Turno', 'Inasistencias', 'Estado', 'Acciones'].map(h => (
                  <th key={h} className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {students.map(s => (
                <tr key={s.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold text-xs">
                      {s.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-700">{s.codigo}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{s.carrera}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{s.turno}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-semibold ${s.inasistencias >= 4 ? 'text-red-500' : 'text-gray-700'}`}>
                      {s.inasistencias}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      s.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
                    }`}>
                      {s.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition">
                        <Pencil size={14} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-3 border-t border-gray-100 text-xs text-gray-400">
            Mostrando {students.length}
          </div>
        </div>
      </div>
    </div>
  )
}
