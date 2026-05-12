import { createContext, useState, useMemo } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchPokemon = async (name) => {
    // VALIDAÇÃO ANTES DO ENVIO (Requisito: Campo Obrigatório)
    if (!name || name.trim() === "") {
      setError("Preenchimento obrigatório: Digite o nome ou ID.");
      setPokemonData(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase().trim()}`);
      
      // VALIDAÇÃO DEPOIS DO ENVIO (Requisito: Mensagem de Erro da API)
      if (!response.ok) {
        throw new Error("Pokémon não encontrado na base de dados.");
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

  // HOOK SELECIONADO: useMemo (Requisito: Implementação de hook específico)
  // Calcula a soma total dos status base do Pokémon
  const totalBaseStats = useMemo(() => {
    if (!pokemonData) return 0;
    return pokemonData.stats.reduce((acc, curr) => acc + curr.base_stat, 0);
  }, [pokemonData]);

  return (
    <PokemonContext.Provider value={{ pokemonData, loading, error, searchPokemon, totalBaseStats }}>
      {children}
    </PokemonContext.Provider>
  );
};