import { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { Typography, Box } from '@mui/material';

export const PokemonCard = () => {
  const { pokemonData, loading, totalBaseStats } = useContext(PokemonContext);

  if (loading) return <Box sx={{ m: 'auto' }}><Typography>Buscando...</Typography></Box>;
  if (!pokemonData) return <Box sx={{ m: 'auto', textAlign: 'center' }}><Typography sx={{fontWeight: 'bold'}}>Quem é esse Pokémon?</Typography></Box>;

  return (
    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ 
        bgcolor: '#77cc55', 
        borderRadius: '5px', 
        border: '2px solid #333',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 2
      }}>
        <img 
          src={pokemonData.sprites.front_default} 
          alt={pokemonData.name}
          style={{ width: '100%', maxWidth: '180px', imageRendering: 'pixelated' }}
        />
      </Box>
      <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', textTransform: 'capitalize' }}>
        {pokemonData.id} - {pokemonData.name}
      </Typography>
      {/* Exibindo o cálculo do useMemo */}
      <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
        Total Status Base: {totalBaseStats}
      </Typography>
    </Box>
  );
};