import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Contato from './Contato';
import Suporte from './Suporte';
import Cadastro from './Cadastro';

export default function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <header className="navbar navbar-dark bg-primary px-4 mb-4 shadow">
        <span className="navbar-brand">
          <strong>UFN - Aula 22 (React)</strong>
        </span>

        <nav className="nav">
          <Link to="/" className="nav-link text-white p-0">
            Home |
          </Link>

          <Link to="/contato" className="nav-link text-white p-0">
            Contato |
          </Link>

          <Link to="/suporte" className="nav-link text-white p-0">
            Suporte |
          </Link>

          <Link to="/cadastro" className="nav-link text-white">
            Cadastrar |
          </Link>
        </nav>
      </header>

      {/* CONTEÚDO */}
      <main className="container">
        <div className="row">
          <div className="col-12">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/suporte" element={<Suporte />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>

          </div>
        </div>
      </main>

      {/* RODAPÉ */}
      <footer className="text-center mt-5 text-secondary">
        <hr />
        <p>&copy; 2026 - Sistemas de Informação - Aplicações Web</p>
      </footer>

    </Router>
  );
}