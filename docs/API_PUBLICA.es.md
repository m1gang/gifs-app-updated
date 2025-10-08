### Documentación de APIs públicas, funciones y componentes

Este documento describe todas las APIs públicas de la aplicación, incluyendo componentes React, hooks, funciones de acciones y clientes de API. Todos los ejemplos están en TypeScript/React.

- **Framework**: React 19 + Vite
- **Lenguaje**: TypeScript
- **Testing**: Vitest + Testing Library

---

### Instalación y ejecución

```bash
npm install
npm run dev
```

Variables de entorno:

- **VITE_GIPHY_API_KEY**: clave de API de Giphy necesaria para las peticiones.

Ejecuta en desarrollo con el archivo `.env` o variables exportadas del entorno.

---

### Puntos de entrada

- `src/main.tsx`: monta la app y renderiza `GifsApp`.
- `src/GifsApp.tsx`: componente raíz que compone cabecera, buscador, historial y lista de GIFs.

Ejemplo mínimo de uso (si integras en otra app):

```tsx
import { createRoot } from 'react-dom/client';
import { GifsApp } from './src/GifsApp';

createRoot(document.getElementById('root')!).render(<GifsApp />);
```

---

### Componentes

#### `CustomHeader`
- Archivo: `src/shared/components/CustomHeader.tsx`
- Props:
  - `title: string` (requerido)
  - `description?: string` (opcional)

Uso:
```tsx
import { CustomHeader } from '@/shared/components/CustomHeader';

<CustomHeader title="Buscador de GIFS" description="Descubre y comparte el gif" />
```

#### `SearchBar`
- Archivo: `src/shared/components/SearchBar.tsx`
- Props:
  - `placeholder?: string` (por defecto: "buscar")
  - `onQuery: (query: string) => void`
- Comportamiento: dispara `onQuery` con debounce de ~700ms al escribir; al presionar Enter o al hacer clic en "Buscar" llama `onQuery` inmediatamente y limpia el input.

Uso:
```tsx
import { SearchBar } from '@/shared/components/SearchBar';

<SearchBar placeholder="Buscar gifs" onQuery={(q) => console.log(q)} />
```

#### `PreviousSearches`
- Archivo: `src/gifs/components/PreviousSearches.tsx`
- Export: `default`
- Props:
  - `searches: string[]`
  - `onLabelClick: (term: string) => void`

Uso:
```tsx
import PreviousSearches from '@/gifs/components/PreviousSearches';

<PreviousSearches searches={["cats", "dogs"]} onLabelClick={(t) => console.log(t)} />
```

#### `GifList`
- Archivo: `src/gifs/components/GifList.tsx`
- Export: `default`
- Props:
  - `gifs: Gif[]` (ver interfaz `Gif` abajo)

Uso:
```tsx
import GifList from '@/gifs/components/GifList';
import type { Gif } from '@/gifs/interfaces/gif.interface';

const gifs: Gif[] = [
  { id: '1', title: 'Funny', url: 'https://...', width: 480, height: 270 },
];

<GifList gifs={gifs} />
```

---

### Hooks

#### `useGifs`
- Archivo: `src/gifs/hooks/useGifs.tsx`
- Retorna:
  - `gifs: Gif[]`
  - `previousTerms: string[]`
  - `handleSearch: (query: string) => Promise<void>`
  - `handleTermClicked: (term: string) => Promise<void>`
- Detalles:
  - Aplica caché en memoria por término para evitar peticiones repetidas.
  - Normaliza términos (`trim().toLowerCase()`) y mantiene hasta 8 búsquedas previas.

Uso:
```tsx
import { useGifs } from '@/gifs/hooks/useGifs';

const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

// Integración típica con componentes:
<>
  <SearchBar onQuery={handleSearch} />
  <PreviousSearches searches={previousTerms} onLabelClick={handleTermClicked} />
  <GifList gifs={gifs} />
</>
```

#### `useCounter`
- Archivo: `src/counter/hooks/useCounter.tsx`
- Parámetros:
  - `initialValue?: number` (por defecto 10)
- Retorna:
  - `counter: number`
  - `handleAdd: () => void`
  - `handleLess: () => void`
  - `handleReset: () => void`

Uso:
```tsx
import { useCounter } from '@/counter/hooks/useCounter';

const { counter, handleAdd, handleLess, handleReset } = useCounter(5);
```

---

### Acciones / Lógica de dominio

#### `getGifsByQuery`
- Archivo: `src/gifs/actions/get-gifs-by-query.action.ts`
- Firma: `(query: string) => Promise<Gif[]>`
- Comportamiento:
  - Retorna `[]` si el término está vacío.
  - Realiza `GET /search` contra Giphy con `limit=10` y `lang=es` (heredado del cliente), mapea la respuesta a la interfaz `Gif`.
  - Ante error, hace `console.error` y retorna `[]`.

Uso:
```ts
import { getGifsByQuery } from '@/gifs/actions/get-gifs-by-query.action';

const gifs = await getGifsByQuery('cats');
```

---

### Cliente HTTP

#### `giphyApi`
- Archivo: `src/gifs/api/giphy.api.ts`
- Tipo: instancia de `axios`
- Configuración:
  - `baseURL: 'https://api.giphy.com/v1/gifs'`
  - `params`: `{ lang: 'es', api_key: import.meta.env.VITE_GIPHY_API_KEY }`

Uso:
```ts
import { giphyApi } from '@/gifs/api/giphy.api';

const { data } = await giphyApi.get('/search', { params: { q: 'cats', limit: 10 } });
```

---

### Tipos e interfaces públicas

#### `Gif`
- Archivo: `src/gifs/interfaces/gif.interface.ts`
- Campos: `id: string`, `title: string`, `url: string`, `width: number`, `height: number`

#### `GiphyResponse` (y tipos relacionados)
- Archivo: `src/gifs/interfaces/giphy.response.ts`
- Representa el contrato de respuesta de la API de Giphy. Útil si accedes al cliente directamente.

---

### Componentes de ejemplo de la app

#### `GifsApp`
- Archivo: `src/GifsApp.tsx`
- Descripción: Composición de `CustomHeader`, `SearchBar`, `PreviousSearches` y `GifList` usando `useGifs`.

Uso (ya integrado por `main.tsx`):
```tsx
import { GifsApp } from '@/GifsApp';
```

#### `MyCounterApp` (demo)
- Archivo: `src/counter/components/MyCounterApp.tsx`
- Demostración del hook `useCounter`.

---

### Ejemplo completo

```tsx
import { CustomHeader } from '@/shared/components/CustomHeader';
import { SearchBar } from '@/shared/components/SearchBar';
import PreviousSearches from '@/gifs/components/PreviousSearches';
import GifList from '@/gifs/components/GifList';
import { useGifs } from '@/gifs/hooks/useGifs';

export function DemoGifs() {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();
  return (
    <>
      <CustomHeader title="Buscador de GIFS" description="Descubre y comparte el gif" />
      <SearchBar placeholder="Buscar gifs" onQuery={handleSearch} />
      <PreviousSearches searches={previousTerms} onLabelClick={handleTermClicked} />
      <GifList gifs={gifs} />
    </>
  );
}
```

---

### Notas y consideraciones

- El hook `useGifs` aplica un caché en memoria por término; si requieres paginación o invalidación, extiende esa lógica.
- `getGifsByQuery` atrapa errores y retorna `[]` para robustez UX.
- Asegúrate de proporcionar `VITE_GIPHY_API_KEY` válido en el entorno de ejecución.

