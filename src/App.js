import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Quiz from './Pages/Quiz';
import Home from './Pages/Home';
import Leaderboard from './Pages/Leaderboard';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
        </Routes>
      </ChakraProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
