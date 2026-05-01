import { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchPokemon = async (name) => {
    // Validação de campo obrigatório antes do envio
    if (!name.trim()) {
      setError("Por favor, digite o nome de um Pokémon.");
      setPokemonData(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      
      if (!response.ok) {
        // Mensagem de erro após o envio
        throw new Error("Pokémon não encontrado. Verifique a grafia.");
      }

      const data = await response.json();
      setPokemonData(data);
    } catch (err) {
      setError(err.message);
      setPokemonData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PokemonContext.Provider value={{ pokemonData, error, loading, searchPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};