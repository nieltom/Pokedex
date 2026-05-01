import { useContext, useMemo } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Divider } from '@mui/material';

export const PokemonCard = () => {
  const { pokemonData } = useContext(PokemonContext);

  //useMemo
 
  const baseStatsTotal = useMemo(() => {
    if (!pokemonData) return 0;
    return pokemonData.stats.reduce((acc, curr) => acc + curr.base_stat, 0);
  }, [pokemonData]);

  if (!pokemonData) return null;

  return (
    <Card sx={{ maxWidth: 400, margin: '20px auto', boxShadow: 6, borderRadius: 4 }}>
      <CardMedia
        component="img"
        height="250"
        image={pokemonData.sprites.other['official-artwork'].front_default}
        alt={pokemonData.name}
        sx={{ objectFit: 'contain', p: 3, bgcolor: '#fdfdfd' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
          {pokemonData.name}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 2 }}>
          {pokemonData.types.map((t) => (
            <Chip key={t.type.name} label={t.type.name} color="secondary" />
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body1" color="text.primary">
          <strong>Total de Status Base:</strong> {baseStatsTotal}
        </Typography>
        
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Altura: {pokemonData.height / 10}m | Peso: {pokemonData.weight / 10}kg
        </Typography>
      </CardContent>
    </Card>
  );
};