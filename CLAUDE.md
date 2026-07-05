# Contexto del Proyecto — Aplicación Web de Biblioteca

## Descripción general

Aplicación web escolar orientada al usuario final de una biblioteca. Permite consultar catálogo, solicitar préstamos, hacer reservas y dar seguimiento a la actividad de lectura. Es un proyecto de taller universitario (UAM Azcapotzalco), por lo que el código debe mantenerse claro, ordenado y fácil de explicar/defender ante un profesor.

## Stack tecnológico (obligatorio, no negociable)

- **Backend:** Node.js + Express.js
- **Base de datos:** MongoDB + Mongoose
- **Motor de vistas:** EJS
- **Frontend:** HTML, CSS, JavaScript (vanilla). **No usar Tailwind Plus / `@tailwindplus/elements`** — es una librería de pago y no tenemos licencia. Si se requiere un framework de estilos, usar **Bootstrap** o CSS propio.

## Alcance funcional (actores)

Por restricción de tiempo, el proyecto **solo implementa dos actores**:

1. **Visitante** (sin cuenta): explora catálogo, se registra, inicia sesión.
2. **Usuario/Lector** (autenticado): gestiona préstamos, reservas, multas, notificaciones, perfil y favoritos.

**El rol de Administrador queda fuera de alcance a menos que sobre tiempo al final del proyecto.** No implementar rutas, vistas ni lógica de administrador salvo que se indique explícitamente.

## Páginas y rutas

El proyecto usa **rutas duplicadas en español e inglés** para la misma vista (patrón ya establecido en `router/rutasPagina.js` — mantenerlo en cualquier ruta nueva que se agregue).

### Públicas
| Página | Rutas |
|---|---|
| Inicio | `/`, `/inicio` |
| Catálogo | `/catalog`, `/catalogo` |
| Ficha de libro | `/cards`, `/tarjetas` *(pendiente de convertir a ruta dinámica `/cards/:id`)* |
| Registro | `/register`, `/registro` |
| Login | `/login`, `/inicio-sesion` |

### Privadas (requieren sesión)
| Página | Rutas |
|---|---|
| Cuenta / Dashboard | `/account`, `/cuenta` |
| Mis préstamos | `/loans`, `/prestamos` |
| Mis reservas | `/reservations`, `/reservas` |
| Mis multas | `/fines`, `/multas` |
| Notificaciones | `/notifications`, `/notificaciones` |
| Mi perfil | `/profile`, `/perfil` |
| Favoritos | `/favorites`, `/favoritos` |

### Error
- `404.ejs` — ya implementada como middleware catch-all en `servidor.js`

## Modelo de datos (a implementar en `models/`, actualmente vacío)

Colecciones de MongoDB definidas (sin rol admin, por ahora no se necesitan operaciones de gestión de inventario, solo lectura de catálogo):

- **`usuarios`** — nombre, apellidos, email, passwordHash, fechaRegistro
- **`libros`** — ficha bibliográfica (título, autores, isbn, género, sinopsis, totalEjemplares, ejemplaresDisponibles)
- **`ejemplares`** — copia física individual (libroId ref, código, estado: disponible/prestado/reservado)
- **`prestamos`** — usuarioId ref, ejemplarId ref, fechaPrestamo, fechaVencimiento, fechaDevolucion, estado, renovaciones
- **`reservas`** — usuarioId ref, libroId ref, fechaReserva, estado (cola de espera)
- **`multas`** — usuarioId ref, prestamoId ref, diasRetraso, montoTotal, estado
- **`notificaciones`** — usuarioId ref, tipo, mensaje, leida, fechaCreacion

## Convenciones ya establecidas en el código (respetarlas)

- Nombres de variables/rutas en español dentro de la lógica de negocio (`usuario`, `apellido`, `aplicacion`, `puerto`)
- Estructura de vistas: `views/public/` para páginas de visitante, `views/private/dashboard/` para páginas de usuario autenticado, `views/templates/` para partials (`header.ejs`, `footer.ejs`)
- Las vistas incluyen el header con `<%- include('../templates/header', {tituloPagina: '...'}) %>`
- `router/rutasPagina.js` centraliza todas las rutas de página (vistas); si se agregan rutas de API/lógica, considerar separarlas en un archivo propio (ej. `router/rutasApi.js`)

## Estado actual del código (punto de partida)

- Servidor Express funcional, sirviendo vistas EJS placeholder (sin contenido real todavía)
- Rutas de página ya definidas para todas las vistas listadas arriba
- `header.ejs` tiene un navbar de Tailwind Plus mal ubicado (dentro de `<head>`) y con licencia no disponible — **hay que reemplazarlo** por un navbar propio (HTML/CSS o Bootstrap)
- No existe carpeta `public/` — hay que crearla para CSS/JS estáticos
- `models/` está vacío — no hay ningún schema de Mongoose
- No hay controllers, ni lógica de autenticación, sesiones, ni conexión a MongoDB implementada aún
- `footer.ejs` y `views/private/account.ejs` están vacíos

## Cómo quiero que trabajes

- Antes de escribir código, si hay una decisión de arquitectura no trivial (ej. cómo manejar sesiones, cómo estructurar controllers), pregúntame en vez de asumir.
- Avanza de forma incremental: modelo de datos → conexión a MongoDB → autenticación → CRUD de catálogo → préstamos/reservas → multas/notificaciones → estilos finales.
- Mantén el código comentado de forma clara, ya que debo poder explicarlo en clase.
- No agregues dependencias de pago ni librerías con licencia comercial.
- Sigue las convenciones de nomenclatura ya presentes en el proyecto (español para negocio, bilingüe para rutas).
