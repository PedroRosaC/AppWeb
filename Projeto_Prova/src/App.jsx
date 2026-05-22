import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Cadastro from './Cadastro';
import CadastroProfessor from './CadastroProf';
import Contato from './Contato';
import Cursos from './Cursos';

export default function App() {
  return (
    <Router>

      {/* NAVBAR */}
      <header className="navbar navbar-dark bg-primary px-4 mb-4 shadow">
        <span className="navbar-brand">
          <img src="img/UniversidadeCauduro.png" width="150px" height="90px" margin="10px" alt="" />
        </span>

        <nav className="nav">
          <Link to="/" className="nav-link text-white p-0">
            Home |
          </Link>
          <Link to="/Cadastro" className="nav-link text-white">
            Cadastrar |
          </Link>
          <Link to="/cadastroprofessor" className="nav-link text-white">
            Cadastrar Professor |
          </Link>
          <Link to="/Contato" className="nav-link text-white">
            Contato |
          </Link>
          <Link to="/Cursos" className="nav-link text-white">
            Cursos Ofertados
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
              <Route path="/contato" element={<Contato />} />
              <Route path="/cursos" element={<Cursos />} />
            </Routes>

          </div>
        </div>
      </main>

      {/* RODAPÉ */}
      <footer  className="text-center mt-5 text-secondary">
        <hr />
        <p>&copy; 2026 - Sistemas de Informação - Prova de Aplicações Web - Pedro Rosa Cauduro</p>
      </footer>

    </Router>
  );
}