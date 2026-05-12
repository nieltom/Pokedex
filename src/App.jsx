import { Box, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import { PokemonContext, PokemonProvider } from './contexts/PokemonContext';
import { SearchBar } from './components/SearchBar';
import { PokemonCard } from './components/PokemonCard';

function Pokemain() {
  const { pokemonData, searchPokemon, loading } = useContext(PokemonContext);

  const handleNext = () => {
    if (pokemonData) searchPokemon((pokemonData.id + 1).toString());
  };

  const handlePrev = () => {
    if (pokemonData && pokemonData.id > 1) searchPokemon((pokemonData.id - 1).toString());
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #74ebd5, #acb6e5)',
      p: 2
    }}>
      <Box sx={{ 
        width: 380, 
        bgcolor: '#dc0a2d', 
        borderRadius: '20px 20px 20px 40px', 
        border: '4px solid #333',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '15px 15px 0px rgba(0,0,0,0.2)'
      }}>
        {/* Sensores superiores */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2, alignItems: 'flex-start' }}>
          <Box sx={{ width: 45, height: 45, bgcolor: '#00f2ff', border: '4px solid white', borderRadius: '50%', boxShadow: '0 0 10px #00f2ff' }} />
          <Box sx={{ width: 12, height: 12, bgcolor: '#ff0000', borderRadius: '50%', border: '2px solid #333' }} />
          <Box sx={{ width: 12, height: 12, bgcolor: '#ffcc00', borderRadius: '50%', border: '2px solid #333' }} />
          <Box sx={{ width: 12, height: 12, bgcolor: '#00ff00', borderRadius: '50%', border: '2px solid #333' }} />
        </Box>

        {/* Tela Cinza */}
        <Box sx={{ 
          bgcolor: '#eee', 
          borderRadius: '10px 10px 10px 30px', 
          border: '3px solid #333',
          p: 2,
          mb: 2,
          minHeight: 320,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <PokemonCard />
        </Box>

        {/* Campo de Busca */}
        <SearchBar />

        {/* Botões de Navegação */}
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button 
            fullWidth 
            onClick={handlePrev} 
            disabled={loading || (pokemonData && pokemonData.id <= 1)}
            variant="contained" 
            sx={{ bgcolor: '#333', '&:hover': { bgcolor: '#555' }, fontSize: '0.7rem' }}
          >
            ANTERIOR &lt;
          </Button>
          <Button 
            fullWidth 
            onClick={handleNext} 
            disabled={loading}
            variant="contained" 
            sx={{ bgcolor: '#333', '&:hover': { bgcolor: '#555' }, fontSize: '0.7rem' }}
          >
            PRÓXIMO &gt;
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <PokemonProvider>
      <Pokemain />
    </PokemonProvider>
  );
}

export default App;