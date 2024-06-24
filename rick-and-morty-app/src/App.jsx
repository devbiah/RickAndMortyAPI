import React, { useState } from 'react';
import CharacterSearch from './components/CharacterSearch';
import CharacterList from './components/CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = (name) => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results || []);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Rick and Morty Search</h1>
      <CharacterSearch onSearch={fetchCharacters} />
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error.message}</p>}
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
