# To-Do App

## Descripción

Esta es una aplicación simple de lista de tareas creada con React, TypeScript, y Tailwind CSS. Permite a los usuarios agregar, eliminar y marcar tareas como completadas, y organiza las tareas con filtros de estado. Además, se guarda en `localStorage` para persistir las tareas, aunque actualmente se sobrescriben al recargar la página.

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

src/
assets/ # Imágenes y otros recursos estáticos
components/ # Componentes reutilizables (Formulario de tareas, Filtros, etc.)
hooks/ # Hooks personalizados (useTasks)
test/ # Pruebas unitarias de los componentes
App.tsx # Componente principal
main.tsx # Punto de entrada de la aplicación

He seguido una estructura modular y clara para facilitar la escalabilidad y el mantenimiento del proyecto. Los componentes están en una carpeta separada y el estado de las tareas se maneja a través de un hook personalizado (`useTasks`).

## Decisiones Técnicas

### Pruebas

No he configurado Jest para que lea archivos TypeScript, por lo que las pruebas unitarias no funcionan en este momento. Esto se debe a que no quería perder tiempo configurando Jest para trabajar con TypeScript, dado que el enfoque del proyecto estaba más orientado a las características de la interfaz y la funcionalidad de la aplicación en sí. Sin embargo, en una fase posterior del desarrollo, se puede solucionar fácilmente añadiendo la configuración adecuada para que Jest pueda procesar archivos `.ts` y `.tsx`.

### Uso de TypeScript

Opté por usar TypeScript en lugar de JavaScript por varias razones:
**Seguridad de Tipos**: TypeScript ayuda a prevenir errores comunes al proporcionar una validación de tipos en tiempo de desarrollo.
**Escalabilidad**: En aplicaciones más grandes, TypeScript facilita el mantenimiento y las actualizaciones, ya que el código es más fácil de refactorizar con el sistema de tipos.

### Uso de Vite

Decidí usar **Vite** para la configuración del proyecto en lugar de herramientas como **Create React App** o **Next.js** debido a que este proyecto es relativamente pequeño. Vite es más rápido y liviano, lo que facilita una configuración sencilla y un tiempo de compilación más rápido, además de ser más adecuado para proyectos pequeños y medianos.

### Persistencia con `localStorage`

Implementé la persistencia de datos utilizando `localStorage` para que las tareas persistan incluso después de un recargo de la página. Sin embargo, al recargar, las tareas actuales se sobrescriben porque no implementé algo que distinga. Si tuviera más tiempo, solucionaría esto mejorando el manejo del `localStorage` para evitar la sobrescritura.

### Mejoras Futuras

Con más tiempo, implementaría las siguientes mejoras:

- **Modal para Agregar Tareas**: Crear un modal que permita agregar tareas de manera más fluida, y que también soporte la carga de archivos multimedia.
- **Subtareas**: Implementar un sistema de subtareas, permitiendo dividir tareas grandes en más pequeñas y marcarlas como completadas parcialmente.
- **Tema Claro/Oscuro**: Aunque no implementé esta característica debido a la falta de tiempo y experiencia con Tailwind CSS, sería útil configurar un modo claro y oscuro para mejorar la experiencia del usuario.
- **Firebase**: Implementar Firebase como base de datos para almacenar las tareas de manera más robusta y escalable.
- **Priorización de Tareas**: Agregar una funcionalidad para priorizar las tareas por urgencia y clasificarlas en orden de importancia.

### Notas

Este desafío me parecido muy interesante, y me recordó a un proyecto anterior que realicé de UX/UI, donde diseñé la interfaz de una lista de tareas. Si tienen curiosidad por ver ese proyecto, pueden verlo aca https://www.behance.net/gallery/168622809/Elan-UX-UI

## Cómo Ejecutar el Proyecto

1. Clona este repositorio:
   git clone <URL_DEL_REPOSITORIO>

2. Instala las dependencias:
   npm install

3. Inicia la aplicación:
   npm run dev
