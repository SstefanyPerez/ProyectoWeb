# SICU — Sistema Integral de Comedor Universitario

Prototipo no funcional desarrollado con React + Vite + TypeScript + Tailwind CSS.  
Universidad Popular del Cesar.

---

## Demo en línea

 https://sicuweb.vercel.app

---

## Tecnologías

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Zustand (manejo de estado)
- React Router v7
- Lucide React (íconos)

---

## Instalación y ejecución

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>

# 2. Entrar a la carpeta del proyecto
cd Frontend

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev
```

Abrir el navegador en: **http://localhost:5173**

---

## Build para producción

```bash
npm run build
```

Esto genera la carpeta `dist/`, que contiene la versión optimizada del proyecto lista para despliegue.

---

## Despliegue

El proyecto fue desplegado utilizando **Vercel** mediante CLI:

```bash
npm install -g vercel
vercel
```

Configuración utilizada:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Compilar para producción |
| `npm run preview` | Vista previa del build |

---

## Credenciales de acceso

### Administrador
| Campo | Valor |
|---|---|
| Usuario | `admin001` |
| Contraseña | `admin123` |

### Estudiante
| Campo | Valor |
|---|---|
| Correo | `estudiante@unicesar.edu.co` |
| Contraseña | `est12345` |

---

## Pantallas del prototipo

| # | Pantalla | Rol | Ruta |
|---|---|---|---|
| 1 | Login | Ambos | `/login` |
| 2 | Panel de Control | Admin | `/admin/dashboard` |
| 3 | Gestión de Estudiantes | Admin | `/admin/estudiantes` |
| 4 | Dashboard Estudiante | Estudiante | `/student/dashboard` |
| 5 | Comentarios | Admin | `/admin/comentarios` |

---

## Roles de usuario

**Administrador** — accede al panel de gestión académica: puede visualizar estadísticas del sistema y la lista de estudiantes registrados.

**Estudiante** — accede a su portal personal: puede ver su resumen académico y las materias inscritas en el período actual.