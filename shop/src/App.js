import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/navbar';
import Home from './pages/home';
import Detail from './pages/detail';
import data from './data'; 

function App() {

  let [shoes,setShoes] = useState(data);

  return (
    <div className="App">

      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element= {<Detail shoes={shoes}/>}/>
        <Route path='*' element= {<div>404 페이지 넣자</div>}/>
      </Routes>
 
    </div>
  );  
}



export default App;



