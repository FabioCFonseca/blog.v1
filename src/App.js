import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Articles from './pages/Articles'
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme ({
  palette: {
    primary: {
      main: '#E9FDF2'
    },
    secondary: {
      main: '#6E895E'
    }
  }
})

function App() {


  return (
    <div className="App">
      <ThemeProvider theme={theme}>  
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/articles' element={<Articles />}/>
          </Routes>    
      </ThemeProvider>    
     
    </div>
  );
}

export default App;
