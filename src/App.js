import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element= {<Home />} />
      </Routes>  
    </div>
  );
}

export default App;
