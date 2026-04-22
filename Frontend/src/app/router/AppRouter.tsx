import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from '../../shared/constants/routes'
import LoginPage from '../../features/auth/pages/LoginPage'
import MainLayout from '../../shared/components/layout/MainLayout'
import AdminDashboardPage from '../../features/dashboard/pages/AdminDashboardPage'
import ComentariosPage from '../../features/comments/pages/ComentariosPage'
import StudentsPage from '../../features/students/pages/StudentsPage'
import StudentDashboardPage from '../../features/dashboard/pages/StudentDashboardPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />

        <Route path="/admin" element={<MainLayout role="admin" />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="estudiantes" element={<StudentsPage />} />
          <Route path="comentarios" element={<ComentariosPage />} />
        </Route>

        <Route path="/student" element={<MainLayout role="student" />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboardPage />} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter