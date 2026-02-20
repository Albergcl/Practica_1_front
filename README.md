## Instalación

Instala las dependencias:

```bash
npm install
```

## Ejecutar programa

Inicia el servidor:

```bash
npm run dev
```

Después de ejecutar el comando abre tu navegador en http://localhost:5173. Verás la lista de personajes y el botón "Más personajes" para cargar páginas adicionales.


## Reumen de los archivos principales

La app obtiene desde `SWAPI` (https://swapi.dev/api) la lista de personajes y los muestra como tarjetas. La estructura principal relacionada con la lógica es:

- `src/api/api.ts`
- `src/components/CharacterCard.tsx`
- `src/components/CharacterList.tsx`
- `src/App.tsx`

### `src/api/api.ts`

Este archivo exporta una instancia de Axios con la URL base de la API de Star Wars (`https://swapi.dev/api`).

Uso y propósito:
- Centraliza la configuración HTTP (baseURL).
- Facilita llamadas a la API desde componentes o hooks sin repetir la URL base.

### `src/components/CharacterCard.tsx`

Componente que recibe un `character` y muestra sus datos en una tarjeta.

Propósito:
- Encapsula la información de un personaje (nombre, género, año de nacimiento) para reutilizar en la lista.

Funcionalidad:
- Recibe la prop `character` (tipo `Character`) y renderiza HTML simple con la información.

### `src/components/CharacterList.tsx`

Componente que recibe un array de personajes y renderiza una lista de `CharacterCard`.

Propósito:
- Gestiona la representación de múltiples personajes.
- Separa la lógica de presentación de la gestión de datos (que está en `App.tsx`).

Funcionalidad:
- Itera sobre `characters` y para cada uno renderiza un `CharacterCard`.

### `src/App.tsx`

Componente raíz de la aplicación. Aquí se gestiona la carga de datos, estados de carga/errores y la paginación.

Funcionalidades principales:
- Mantener estados:
	- `characters`: array con todos los personajes cargados hasta ahora.
	- `loading`: booleano que indica si hay una petición en curso.
	- `error`: cadena con mensaje de error en caso de fallo.
	- `nextPage`: url (string) de la siguiente página que devuelve la API (o `null`).
- Realizar peticiones a la API usando la instancia `api` de `src/api/api.ts`.
- Añadir los resultados recibidos al estado `characters` (concatenando páginas sucesivas).
- Mostrar la lista con `CharacterList` y el botón para cargar más cuando `nextPage` esté definido.

Fragmento de flujo (simplificado):

1. Al montar (`useEffect`) se llama a `fetchCharacters()` para cargar la primera página.
2. `fetchCharacters` hace `api.get('/people')` (o con `?page=n`) y actualiza `characters` con `data.results` y `nextPage` con `data.next`.
3. Si `nextPage` no es `null`, se muestra el botón "Más personajes"; al pulsarlo se extrae el número de página de la URL `nextPage` y se vuelve a llamar a `fetchCharacters(page)` para traer la siguiente página.


## Tipos usados

Los tipos están en `src/types/character.tsx` y definen `Character` y `ApiResponse` (con `next` y `results`).


## Uso de la IA

Para este proyecto me he ayudado de la IA principalmente en la creación de los estilos y en parte del desarrollo de este mismo archivo (formatos, apartados, estructura, etc.), asegurando siempre la revisión, validación y redacción final por mi parte.