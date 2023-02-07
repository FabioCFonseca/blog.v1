import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Articles from './pages/Articles'
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme ({
  typography: {
    fontFamily: [
      'Noto Serif Khojki',
      'cursive',
    ].join(','),
  },});

function App() {

  return (
    <div className="App">
      <Header />
      <ThemeProvider theme={theme}>  
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/articles/:idurl' element={<Articles />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>    
      </ThemeProvider>    
     
    </div>
  );
}

export default App;
