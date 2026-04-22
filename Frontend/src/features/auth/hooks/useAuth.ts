import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { ROUTES } from '../../../shared/constants/routes'

const ADMIN = { credencial: 'admin001', password: 'admin123', nombre: 'Carlos Rodríguez' }
const STUDENT = { credencial: 'estudiante@unicesar.edu.co', password: 'est12345', nombre: 'María García' }

export function useAuth() {
  const navigate = useNavigate()
  const { setAuth } = useAuthStore()

  const [adminUser, setAdminUser] = useState('')
  const [adminPassword, setAdminPassword] = useState('')
  const [adminError, setAdminError] = useState('')
  const [adminLoading, setAdminLoading] = useState(false)

  const [studentUser, setStudentUser] = useState('')
  const [studentPassword, setStudentPassword] = useState('')
  const [studentError, setStudentError] = useState('')
  const [studentLoading, setStudentLoading] = useState(false)

  const handleAdminLogin = async () => {
    setAdminError('')
    setAdminLoading(true)
    await new Promise(r => setTimeout(r, 700))
    if (adminUser === ADMIN.credencial && adminPassword === ADMIN.password) {
      setAuth('mock-token-admin', 'admin', ADMIN.nombre)
      navigate(ROUTES.ADMIN_DASHBOARD)
    } else {
      setAdminError('Usuario o contraseña incorrectos')
    }
    setAdminLoading(false)
  }

  const handleStudentLogin = async () => {
    setStudentError('')
    setStudentLoading(true)
    await new Promise(r => setTimeout(r, 700))
    if (studentUser === STUDENT.credencial && studentPassword === STUDENT.password) {
      setAuth('mock-token-student', 'student', STUDENT.nombre)
      navigate(ROUTES.STUDENT_DASHBOARD)
    } else {
      setStudentError('Correo o contraseña incorrectos')
    }
    setStudentLoading(false)
  }

  return {
    adminUser, setAdminUser,
    adminPassword, setAdminPassword,
    adminError, setAdminError, adminLoading, handleAdminLogin,
    studentUser, setStudentUser,
    studentPassword, setStudentPassword,
    studentError, setStudentError, studentLoading, handleStudentLogin,
  }
}
