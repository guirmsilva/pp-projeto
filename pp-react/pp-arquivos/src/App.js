import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Listagem from './pages/Listagem';
import Sobre from './pages/Sobre';
import Logged from './pages/Logged';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/listagem" element={<Listagem />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/logged" element={<Logged />}></Route>
      </Routes>

    </Router>
  );
};

export default App;