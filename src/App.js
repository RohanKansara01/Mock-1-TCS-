import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Leaderboard from './Pages/Leaderboard';
import { ChakraProvider } from '@chakra-ui/react';
import QuizPage from './Pages/QuizPage';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/leaderboard' element={<Leaderboard/>}/>
          <Route path='/quiz' element={<QuizPage/>}/>
        </Routes>
      </ChakraProvider>
    </div>
    </BrowserRouter>
  );
}

export default App;
