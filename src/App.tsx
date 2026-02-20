// src/App.tsx
import { useEffect, useState } from 'react';
import './App.css';
import type { ApiResponse, Character } from './types/character';
import CharacterList from './components/CharacterList';
import { api } from './api/api';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);

  const fetchCharacters = async (page?: string) => {
    setLoading(true);

    await api.get(`/people/${page ? "?page=" + page : ""}`)
             .then((res) => {
              const data: ApiResponse = res.data;

              setCharacters((prev) => [...prev, ...data.results]);
              setNextPage(data.next);
             })
             .catch((err) => setError(`Error al obtener los datos: ${err.message}`))
             .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCharacters()
  }, []);

  return (
    <div className="container">
      <h1>Personajes de Star Wars</h1>

      {error && <p>{error}</p>}

      <CharacterList characters={characters} />

      {loading && <p>Cargando personajes...</p>}

      {nextPage && !loading && (
        <button onClick={() => {
          const pageNumber = new URL(nextPage).searchParams.get("page");
          fetchCharacters(pageNumber || undefined);
        }}>Más personajes</button>
      )}
    </div>
  );
}

export default App;