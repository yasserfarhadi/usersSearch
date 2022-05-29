import AppBar from './components/AppBar/AppBar';
import Users from './containers/Users';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner/Spinner';

function App() {
  const loading = useSelector((store) => store.loading);
  return (
    <div className="App">
      {loading && <Spinner />}
      <AppBar />
      <Container maxWidth="lg" sx={{ padding: '50px 0' }}>
        <Users />
      </Container>
    </div>
  );
}

export default App;
