import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Page from './pages/page';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/page'} element={<Page />}></Route>
    </Routes>
  );
}

export default App;
