import { useContext, useRef } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { TextField, Box } from '@mui/material';

export const SearchBar = () => {
  const inputRef = useRef(null);
  const { searchPokemon, error, loading } = useContext(PokemonContext);

  const handleAction = () => {
    searchPokemon(inputRef.current.value);
  };

  return (
    <Box sx={{ mt: 2, px: 2 }}>
      <TextField
        fullWidth
        inputRef={inputRef}
        placeholder="Ex: Pikachu ou 25"
        size="small"
        error={!!error} // Fica vermelho se houver erro (antes ou depois)
        helperText={error} // Exibe a mensagem de erro no layout
        disabled={loading}
        onKeyPress={(e) => e.key === 'Enter' && handleAction()}
        sx={{ bgcolor: '#fff', borderRadius: 1 }}
      />
    </Box>
  );
};