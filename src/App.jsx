import { Container, Typography } from '@mui/material';
import { PokemonProvider } from './contexts/PokemonContext';
import { SearchBar } from './components/SearchBar';
import { PokemonCard } from './components/PokemonCard';

function App() {
  return (
    <PokemonProvider>
      <Container maxWidth="md" sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom color="primary">
          PokéSearch SPA
        </Typography>
        <SearchBar />
        <PokemonCard />
      </Container>
    </PokemonProvider>
  );
}

export default App;