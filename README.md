# Juego con palabras y con mi cuerpo

### Plataforma educativa de estimulación del lenguaje

Aplicación web educativa desarrollada para la **Maestra Fernanda Acosta**, orientada a acompañar el desarrollo del lenguaje, la expresión corporal, la creatividad y el aprendizaje mediante actividades lúdicas.

El proyecto reúne recursos educativos para niños, familias y docentes en una interfaz visual, intuitiva y adaptable a diferentes dispositivos.

**Estado del proyecto:** En desarrollo. La experiencia pública principal está implementada y el panel administrativo se encuentra en una etapa inicial.

---

## Objetivo del proyecto

Desarrollar una plataforma que permita centralizar recursos de estimulación del lenguaje y facilitar su acceso desde un único espacio digital.

La propuesta busca combinar música, movimiento, narración y actividades participativas para favorecer el aprendizaje mediante el juego.

Además de la experiencia pública, el proyecto contempla un panel administrativo que permitirá a la docente gestionar los contenidos sin necesidad de modificar el código fuente.

## Funcionalidades implementadas

### Inicio

- Presentación de la propuesta educativa.
- Introducción a las actividades y objetivos pedagógicos.
- Acceso a las cuatro categorías principales.
- Ilustraciones personalizadas para cada categoría.
- Sección de experiencias del aula con reproducción de videos.

### Música y danza

Sección que reúne recursos audiovisuales para acompañar actividades de expresión corporal, ritmo, movimiento y estimulación del lenguaje.

### Cuentos

Colección de cuentos audiovisuales para estimular la imaginación, la comprensión oral, el vocabulario y la conversación.

### Adivinanzas

Actividades interactivas que permiten leer una adivinanza y descubrir su respuesta, promoviendo el razonamiento y la comprensión del lenguaje.

### Juegos de manos

Propuestas que combinan palabras, ritmo, coordinación y movimiento, con instrucciones que pueden consultarse de forma interactiva.

### Navegación y experiencia de usuario

- Navegación entre secciones mediante React Router.
- Componentes reutilizables.
- Diseño responsive.
- Identidad visual con paleta de colores centralizada mediante variables CSS.
- Reproducción de contenido audiovisual.
- Interacciones para revelar respuestas e instrucciones.

## Tecnologías utilizadas

| Tecnología | Utilización |
|---|---|
| React | Construcción de interfaces y componentes reutilizables |
| Vite | Entorno de desarrollo y compilación |
| JavaScript | Lógica de la aplicación |
| React Router | Navegación entre páginas |
| CSS3 | Estilos, animaciones y diseño responsive |
| Supabase | Infraestructura preparada para autenticación, base de datos y almacenamiento |
| SweetAlert2 | Interfaz de acceso administrativo |
| Git y GitHub | Control de versiones |

## Arquitectura del frontend

El proyecto utiliza una organización por responsabilidades para separar los componentes visuales, las páginas, los datos, la navegación, los servicios y los estilos.

```text
public/
  Imágenes y recursos audiovisuales

src/
  auth/
    Autenticación y protección de rutas

  components/
    Componentes reutilizables

  data/
    Contenido educativo local

  pages/
    Páginas públicas y administrativas

  router/
    Configuración de rutas

  services/
    Integración con servicios externos

  Style/
    Estilos CSS

  App.jsx
  main.jsx
```

Esta organización facilita el mantenimiento, la reutilización de componentes y la incorporación progresiva de funcionalidades.

## Integración con Supabase

El proyecto incorpora Supabase como infraestructura para la futura administración dinámica de los contenidos.

Actualmente se ha trabajado en:

- Configuración del proyecto y conexión desde React.
- Estructura de tablas para las categorías y los recursos educativos.
- Configuración de políticas de seguridad mediante Row Level Security (RLS).
- Preparación de almacenamiento para imágenes y videos.
- Autenticación del usuario administrador.
- Protección de la ruta administrativa.
- Inicio y cierre de sesión.

**Importante:** la información educativa que se presenta en las páginas públicas todavía se obtiene principalmente de archivos JavaScript locales. La migración a consultas dinámicas desde Supabase está pendiente.

## Panel administrativo — En desarrollo

El proyecto contempla un panel privado destinado a la docente, desde el cual podrá administrar los contenidos educativos.

**Implementado:**

- Acceso mediante autenticación.
- Verificación de permisos administrativos.
- Protección de la ruta `/admin`.
- Vista inicial del panel.
- Cierre de sesión.

**Pendiente de implementación:**

- Gestión de canciones y recursos musicales.
- Gestión de cuentos.
- Creación y edición de adivinanzas.
- Administración de juegos de manos.
- Carga y administración de videos del aula.
- Actualización de imágenes de las categorías.
- Integración de los formularios administrativos con Supabase.
- Lectura dinámica de contenidos desde la base de datos.

Estas funcionalidades forman parte de la siguiente etapa de desarrollo y no deben considerarse disponibles actualmente.

## Instalación y ejecución local

**Requisitos:** Node.js y npm.

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Ingresar al proyecto:

```bash
cd NOMBRE_DEL_PROYECTO
```

Instalar dependencias:

```bash
npm install
```

Configurar las variables de entorno necesarias para Supabase en un archivo `.env`:

```env
VITE_SUPABASE_URL=tu_url
VITE_SUPABASE_PUBLISHABLE_KEY=tu_clave_publicable
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

Vite mostrará la dirección local desde la cual acceder a la aplicación.

**Nota:** el funcionamiento de la autenticación administrativa requiere un proyecto Supabase configurado con las tablas, políticas y permisos correspondientes. No se deben publicar credenciales privadas ni contraseñas en el repositorio.

## Próximas etapas

1. Completar la interfaz del panel administrativo.
2. Implementar las operaciones de creación, consulta, actualización y eliminación de contenidos.
3. Conectar las páginas públicas con Supabase.
4. Migrar los recursos educativos desde los archivos locales.
5. Realizar pruebas integrales de los flujos públicos y administrativos.
6. Preparar el despliegue definitivo.

## Consideraciones de privacidad

El proyecto incluye una sección destinada a compartir experiencias educativas mediante videos del aula.

Antes de su publicación definitiva, se deberá verificar que exista la autorización correspondiente para utilizar imágenes y videos de menores de edad.

## Aprendizajes y desafíos técnicos

Este proyecto permite aplicar y profundizar conocimientos de desarrollo frontend mediante una necesidad real.

Entre los aspectos técnicos abordados se destacan:

- Diseño de interfaces basadas en componentes.
- Separación de responsabilidades.
- Manejo de propiedades y renderizado dinámico en React.
- Navegación con rutas públicas y protegidas.
- Integración inicial de autenticación y permisos.
- Organización de contenido educativo estructurado.
- Preparación de una arquitectura que evoluciona desde datos locales hacia persistencia en la nube.

Uno de los principales desafíos es desarrollar una experiencia sencilla para los usuarios finales, manteniendo una estructura técnica que permita incorporar progresivamente la administración dinámica del contenido.

## Autor

**Gastón Jaureguiberry**  
Desarrollo frontend y full