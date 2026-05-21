import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Cadastro from './Cadastro';
import CadastroProfessor from './CadastroProfessor';

export default function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <header className="navbar navbar-dark bg-primary px-4 mb-4 shadow">
        <span className="navbar-brand">
          <strong>UFN - Aula 27 (Revisão)</strong>
        </span>

        <nav className="nav">
          <Link to="/" className="nav-link text-white p-0">
            Home |
          </Link>
          <Link to="/cadastro" className="nav-link text-white">
            Cadastrar |
          </Link>
          <Link to="/cadastroprofessor" className="nav-link text-white">
            Cadastrar Professor
          </Link>
        </nav>
      </header>

      {/* CONTEÚDO */}
      <main className="container">
        <div className="row">
          <div className="col-12">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/cadastroprofessor" element={<CadastroProfessor />} />
            </Routes>

          </div>
        </div>
      </main>

      {/* RODAPÉ */}
      <footer  className="text-center mt-5 text-secondary">
        <hr />
        <p>&copy; 2026 - Sistemas de Informação - Aplicações Web - Pedro Rosa Cauduro</p>
      </footer>

    </Router>
  );
}