# Especificación — Página de Inicio

**Rutas:** `/`, `/inicio`
**Actores que la ven:** Visitante y Usuario/Lector (contenido varía según autenticación)

---

## 1. Propósito

Servir como punto de entrada al catálogo, mostrando una muestra atractiva del contenido disponible y guiando al visitante hacia el registro, o al usuario autenticado hacia sus préstamos activos.

---

## 2. Estructura de secciones

### 2.1 Hero / Sección principal

| Elemento | Descripción |
|---|---|
| Título | Frase corta y llamativa (ej. "Encuentra tu próxima lectura") |
| Subtítulo | Una línea explicando el propósito del sitio |
| Buscador destacado | Mismo componente de búsqueda del navbar, en versión más grande, como entrada principal de búsqueda |
| CTA (Visitante) | Botón "Regístrate para pedir prestado" |
| Saludo personalizado (Usuario autenticado) | "Hola, [nombre]" + acceso rápido a "Mis préstamos" |

### 2.2 Categorías/Géneros

- Grid o carrusel de 5 a 8 tarjetas con los géneros principales del catálogo (ej. Novela, Ciencia, Historia, Infantil)
- Cada tarjeta enlaza a `/catalogo?genero=X`
- Elemento visual: ícono o color distintivo por categoría

### 2.3 Novedades / Recién agregados

- Carrusel o grid de 4 a 6 libros agregados recientemente
- Cada tarjeta de libro muestra: portada, título, autor, badge de disponibilidad ("Disponible" / "Prestado")
- Enlace "Ver todo" hacia el catálogo completo

### 2.4 Más solicitados / Populares *(opcional, si el tiempo lo permite)*

- Igual formato que Novedades, pero ordenado por cantidad de préstamos históricos
- Sirve para mostrar una consulta de agregación en MongoDB

### 2.5 Sección informativa *(solo Visitante)*

- Tres columnas cortas: "1. Busca" → "2. Solicita" → "3. Recoge tu libro"
- Refuerza el valor del servicio antes de pedir el registro

### 2.6 Footer

- El componente de footer ya definido en el proyecto (enlaces + redes sociales + copyright)

---

## 3. Componentes reutilizables involucrados

| Componente | Dónde se reutiliza |
|---|---|
| Tarjeta de libro (portada + título + autor + badge de disponibilidad) | Catálogo, Favoritos, Novedades, Populares |
| Carrusel horizontal | Categorías, Novedades, Populares |
| Buscador | Navbar y Hero |
| Badge de estado (disponible / prestado / reservado) | Tarjeta de libro, Mis préstamos |

---

## 4. Datos requeridos desde MongoDB

| Dato | Fuente |
|---|---|
| Últimos N libros agregados | Colección `libros`, ordenado por fecha de alta |
| Lista de géneros disponibles | Valores distintos presentes en `libros.genero` |
| Nombre del usuario y conteo de préstamos activos | Colección `usuarios` + `prestamos` (solo si hay sesión activa) |
| Libros más solicitados *(opcional)* | Agregación sobre `prestamos`, agrupando por `libroId` y contando ocurrencias |

---

## 5. Comportamiento según actor

| Sección | Visitante | Usuario/Lector autenticado |
|---|---|---|
| Hero | CTA de registro | Saludo personalizado + acceso a préstamos |
| Categorías | Visible | Visible |
| Novedades | Visible | Visible |
| Populares | Visible | Visible |
| Informativa (cómo funciona) | Visible | Oculta |
