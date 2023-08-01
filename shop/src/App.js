import logo from './logo.svg';
import './App.css';
import {Container,Row,Col } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import NavBar from './components/navbar';
import Home from './pages/home';
import Detail from './pages/detail';


function App() {

  return (
    <div className="App">

      <NavBar></NavBar>

      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/detail' element= {<Detail></Detail>}/>
        
        <Route path='/about' element= {<About/>}> 
           <Route path='/member' element= {<About/>}/>
           <Route path='/location' element= {<About/>}/>
        </Route>
        
        <Route path='*' element= {<div>404 페이지 넣자</div>}/>
      </Routes>

      
    </div>
  );  
}

export default App;



