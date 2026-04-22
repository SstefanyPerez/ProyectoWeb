import { Star } from 'lucide-react'

const comentarios = [
  { id: 1, nombre: 'Andres Perez', carrera: 'Medicina', calificacion: 5, mensaje: 'El servicio del comedor es excelente, la comida siempre está a tiempo y el trato es muy bueno.' },
  { id: 2, nombre: 'Yaileth Maestre', carrera: 'Psicología', calificacion: 4, mensaje: 'Me gustaría que hubiera más variedad en el menú, pero en general el servicio es bueno.' },
  { id: 3, nombre: 'Bennedict Guzman', carrera: 'Arquitectura', calificacion: 2, mensaje: 'Tuve problemas con mi turno asignado, el sistema me marcó inasistencia cuando sí fui.' },
  { id: 4, nombre: 'Miguel Hernandez', carrera: 'Derecho', calificacion: 5, mensaje: 'Todo perfecto, el proceso de registro es rápido y la atención muy amable.' },
  { id: 5, nombre: 'Jhon Martinez', carrera: 'Ing. Civil', calificacion: 3, mensaje: 'El comedor está bien pero a veces hay mucha fila y el tiempo de espera es largo.' },
  { id: 6, nombre: 'Linda Guzman', carrera: 'Administración', calificacion: 4, mensaje: 'Buen servicio en general, solo sugiero mejorar la organización de los turnos.' },
]

function Estrellas({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={13} className={i <= n ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'} />
      ))}
    </div>
  )
}

export default function ComentariosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Comentarios</h1>
        <p className="text-gray-500 text-sm mt-1">Feedback de los estudiantes sobre el servicio del comedor.</p>
      </div>

      <div className="grid gap-4">
        {comentarios.map(c => (
          <div key={c.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {c.nombre.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">{c.nombre}</p>
                  <p className="text-xs text-gray-400">{c.carrera}</p>
                </div>
              </div>
              <Estrellas n={c.calificacion} />
            </div>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">{c.mensaje}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
