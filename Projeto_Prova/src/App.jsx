import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './Home.css';

import Home from './Home';
import Cadastro from './Cadastro';
import CadastroProfessor from './CadastroProf';
import Contato from './Contato';
import Cursos from './Cursos';

export default function App() {
  return (
    <Router>

      <header className="header">
        <span className="navbar-brand">
          <img src="img/UniversidadeCauduro.png" className='logo' alt="" />
        </span>

        <nav className="navbar">
          <a href="/" className="link">Home</a>
          <a href="/cadastro" className="link">Cadastrar</a>
          <a href="/professor" className="link">Cadastrar Professor</a>
          <a href="/cursos" className="link">Cursos</a>
          <a href="/contato" className="link">Contato</a>

        </nav>
      </header>

      <main className="container">
        <div className="row">
          <div className="col-12">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/professor" element={<CadastroProfessor />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/cursos" element={<Cursos />} />
            </Routes>

          </div>
        </div>
      </main>

      <footer className="text-center mt-5 text-secondary">
        <hr />
        
        <div class="footer-container">

          <div class="footer-column">
            <h3>Estude na UC</h3>
            <ul>
              <li><a href="#">Graduação</a></li>
              <li><a href="#">Especialização</a></li>
              <li><a href="#">Mestrado e Doutorado</a></li>
              <li><a href="#">Residências</a></li>
              <li><a href="#">EAD</a></li>
              <li><a href="#">Capacitação Profissional</a></li>
              <li><a href="#">Forma de Ingresso</a></li>
              <li><a href="#">Ingresso e Reingresso</a></li>
              <li><a href="#">Bolsas e Financiamentos</a></li>
              <li><a href="#">Vestibular</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Institucional</a></li>
              <li><a href="#">Reitoria</a></li>
              <li><a href="#">Pró-reitoria de Administração e Finanças</a></li>
              <li><a href="#">Pró-reitoria Acadêmica</a></li>
              <li><a href="#">Pró-reitoria de Pós-graduação e Pesquisa</a></li>
              <li><a href="#">Pró-reitoria de Extensão e Relações Comunitárias</a></li>
              <li><a href="#">Conselho de Integração Comunitária – CIC</a></li>
              <li><a href="#">Conselho Universitário – CONSUN</a></li>
              <li><a href="#">Comissão Própria de Avaliação - CPA</a></li>
              <li><a href="#">Laboratórios de Ensino e Pesquisa</a></li>
              <li><a href="#">Tour Virtual</a></li>
              <li><a href="#">Relatório de Transparência</a></li>
              <li><a href="#">Planilha de Custos</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Comunicação</h3>
            <ul>
              <li><a href="#">Agência Central Sul</a></li>
              <li><a href="#">Assessoria de Comunicação</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Periódicos</a></li>
              <li><a href="#">RádioWeb UC</a></li>
              <li><a href="#">UCtv</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Serviços</h3>
            <ul>
              <li><a href="#">Alumni UC</a></li>
              <li><a href="#">Autenticação de Diploma Digital</a></li>
              <li><a href="#">Autenticação de Documento</a></li>
              <li><a href="#">Boleto</a></li>
              <li><a href="#">Coletividades + UC</a></li>
              <li><a href="#">Editais</a></li>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Intercâmbio</a></li>
              <li><a href="#">Parcerias</a></li>
              <li><a href="#">Suporte</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Atendimento</h3>
            <ul>
              <li><a href="#">Biblioteca</a></li>
              <li><a href="#">Central de Atendimento</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Ouvidoria</a></li>
            </ul>
          </div>

        </div>
        <hr />
        <p>&copy; 2026 - Sistemas de Informação - Prova de Aplicações Web - Pedro Rosa Cauduro</p>

      </footer>

    </Router>
  );
}