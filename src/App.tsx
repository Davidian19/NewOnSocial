import react, { useState } from 'react';
import Home from './components/Home';
import Navbar from './components/navBar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import CheckList from './components/CheckList';


function App() {
  const[currentRoute, setCurrentRoute] = useState('1');
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home setCurrentRoute={setCurrentRoute}/>} />
            <Route path="CheckList" element={<CheckList currentRoute={currentRoute}/>} />
            <Route path="Home" element={<Home setCurrentRoute={setCurrentRoute}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App
