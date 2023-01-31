import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Articles from './pages/Articles'
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme ({
  palette: {
    primary: {
      main: '#E9FDF2'
    },
    secondary: {
      main: '#7FD1AE'
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
            <Route path='/about' element={<About />}/>
            <Route path='/articles/:idurl' element={<Articles />}/>
            <Route path='*' element={<ErrorPage />}/>
          </Routes>    
      </ThemeProvider>    
     
    </div>
  );
}

export default App;
