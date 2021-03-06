import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
