import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/navbar';
import Home from './pages/home';
import Detail from './pages/detail';
import data from './data'; 
import axios from 'axios';


function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element= {<Detail shoes={shoes}/>}/>
        <Route path='*' element= {<div>404 페이지 넣자</div>}/>
      </Routes>

      <button className='border border-black' onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((data)=>{
          console.log(data.data)
        })
      }}>버튼</button>

      
    </div>
  );  
}



export default App;



