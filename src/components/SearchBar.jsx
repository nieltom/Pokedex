import { useContext, useRef } from 'react';
import { PokemonContext } from '../contexts/PokemonContext';
import { TextField, Button, Box } from '@mui/material'; // Componentes do MUI

export const SearchBar = () => {
  const inputRef = useRef(null);
  const { searchPokemon, error, loading } = useContext(PokemonContext);

  const handleAction = () => {
    searchPokemon(inputRef.current.value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto', mt: 4 }}>
      <TextField
        label="Nome do Pokémon"
        variant="outlined"
        inputRef={inputRef}
        error={!!error} // Se houver erro, a borda fica vermelha
        helperText={error} // Exibe a mensagem de erro embaixo do campo
        disabled={loading}
        fullWidth
      />
      <Button 
        variant="contained" 
        onClick={handleAction} 
        disabled={loading}
        size="large"
      >
        {loading ? 'Buscando...' : 'Pesquisar'}
      </Button>
    </Box>
  );
};