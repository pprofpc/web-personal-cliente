import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Admin from "./pages/Admin";
import Home from './pages/Home';
import Elements from './pages/Elements';
import Contact from './pages/Contact';


import './App.scss';

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Sistema de Rutas Básico</h1>

        <nav>
          <Link to="/">Home | </Link>
          <Link to="/contact">Contactos | </Link>
          <Link to="/elementos">Elementos |</Link>
          <Link to="/admin">Admin</Link>
        </nav>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route index element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/elementos' element={<Elements />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </div>
    </Router>
  );
}


function Error404() {
  return <h2>Página no encontrada :-(</h2>;
};

export default App;
