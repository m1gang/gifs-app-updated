# 🎬 GIFs App

Aplicación para buscar GIFs usando la API de GIPHY, desarrollada con React, Vite y TypeScript. Incluye pruebas con Vitest y React Testing Library.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Vitest](https://img.shields.io/badge/Vitest-3.2.4-6E9F18?logo=vitest)
![Axios](https://img.shields.io/badge/Axios-1.12.2-5A29E4)
![ESLint](https://img.shields.io/badge/ESLint-9.x-4B32C3?logo=eslint)

## ✨ Características

- 🔎 **Búsqueda de GIFs** por término usando la API de GIPHY
- 🧠 **Historial de búsquedas** con etiquetas reutilizables
- ⚛️ **React + TypeScript** con SWC para un DX rápido
- 🧪 **Testing** con Vitest y React Testing Library
- 🧹 **Calidad** con ESLint

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca de UI
- **Vite 7.1.7** - Build y servidor de desarrollo
- **TypeScript 5.8.3** - Tipado estático
- **@vitejs/plugin-react-swc** - Fast Refresh con SWC

### Datos y HTTP
- **Axios 1.12.2** - Cliente HTTP
- **GIPHY API** - Fuente de datos de GIFs

### Testing y Herramientas
- **Vitest 3.2.4** - Test runner
- **React Testing Library 16.3.0** - Pruebas de componentes
- **JSDOM 27** - Entorno de test
- **ESLint 9** - Linting

## 📋 Prerrequisitos

- Node.js 18 o superior
- npm o yarn
- Una API Key de **GIPHY** (gratuita) desde su portal para desarrolladores

## 🛠️ Instalación

1. Clona el repositorio
   ```bash
   git clone https://github.com/tu-usuario/gifs-app-react.git
   cd gifs-app-react
   ```

2. Instala las dependencias
   ```bash
   npm install
   ```

3. Configura las variables de entorno
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   VITE_GIPHY_API_KEY=tu_api_key_de_giphy
   ```

## 🚀 Uso

### Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`.

### Construcción para producción
```bash
npm run build
```
Nota: el script de build ejecuta primero los tests y el chequeo de TypeScript.

### Vista previa de producción
```bash
npm run preview
```

### Testing
```bash
npm test         # Ejecutar tests
npm run test:ui  # UI de Vitest
npm run coverage # Coverage
```

### Linting
```bash
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── gifs/
│   ├── actions/              # Acciones (lógica de negocio)
│   ├── api/                  # Cliente HTTP (GIPHY)
│   ├── components/           # Componentes de UI (GifList, PreviousSearches)
│   ├── hooks/                # Hooks (useGifs)
│   └── interfaces/           # Tipos e interfaces
├── shared/
│   └── components/           # Componentes compartidos (SearchBar, CustomHeader)
├── counter/                  # Ejemplos/demo (useCounter, MyCounterApp)
├── mock-data/                # Datos de prueba
├── GifsApp.tsx               # Composición principal de la app
├── main.tsx                  # Punto de entrada
└── index.css                 # Estilos globales
```

## 🔧 Configuración

### GIPHY API

1. Crea una API Key en el portal de [GIPHY Developers](https://developers.giphy.com/)
2. Añade la variable `VITE_GIPHY_API_KEY` en tu archivo `.env`
3. El cliente HTTP usa esa clave de entorno automáticamente:

```ts
// src/gifs/api/giphy.api.ts
import axios from 'axios'

export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    lang: 'es',
    api_key: import.meta.env.VITE_GIPHY_API_KEY,
  }
})
```

## 🧪 Testing

El proyecto incluye pruebas unitarias y de integración con Vitest y React Testing Library.

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo coverage
npm run coverage

# UI de Vitest
npm run test:ui
```

## 📱 Características de la Aplicación

- Búsqueda de GIFs por término
- Listado de resultados en cuadrícula
- Historial de búsquedas recientes con selección rápida
- Componentes reutilizables y tipados con TypeScript

## 🔧 Scripts disponibles

- `dev`: inicia el servidor de desarrollo
- `build`: corre tests, compila TypeScript y construye con Vite
- `preview`: sirve la build de producción
- `test`, `test:ui`, `coverage`: pruebas con Vitest
- `lint`: linting del proyecto

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**MiGaNg**
- GitHub: [@MiGaNg](https://github.com/MiGaNg)

## 🙏 Agradecimientos

- [React](https://react.dev/) por el framework
- [Vite](https://vitejs.dev/) por la herramienta de desarrollo
- [GIPHY](https://giphy.com/) por la API de GIFs
- [Vitest](https://vitest.dev/) y [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) por el entorno de pruebas

## 📞 Soporte

Si tienes alguna pregunta o problema, por favor:

1. Revisa la documentación en este `README`
2. Busca en los issues del repositorio
3. Crea un nuevo issue con el detalle del problema

---

⭐ ¡Si te gusta este proyecto, no olvides darle una estrella!
