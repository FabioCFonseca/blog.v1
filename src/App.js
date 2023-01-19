import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Container from '@mui/material/Container';
import Display from './components/Display';


function App() {


  return (
    <div className="App">
      <Header />
      <Hero />
      <Container>
        <Display />
      </Container>
    </div>
  );
}

export default App;
