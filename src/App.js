import './App.css';
import Logo from './body/logo.js';
import Menu from './body/Menu.js';
import Icones from './body/Icones';
import { pesquisa } from './body/pesquisa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servicos from './pages/Servicos.js';
import Produtos from './pages/Produtos.js';
import SobreNos from './pages/SobreNos.js';
import Contato from './pages/Contato.js';
import { useState } from 'react';



function App() {

  const [ listaBusca, setListaBusca] = useState([])
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Logo></Logo>
          <Menu></Menu>
          <Icones></Icones>
        </header>
        <main id='main'>
        <Routes>
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/sobre-nos" element={<SobreNos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/" element={
                <section className='section'>
                  <h2>Conheça nossos serviços</h2>
                  <input className='input' placeholder='Escreva aqui'
                    onBlur = { evento => {
                      const textoDigitado = evento.target.value
                      const resultadoPesquisa = pesquisa.filter( busca => busca.nome.includes(textoDigitado))
                      setListaBusca(resultadoPesquisa)
                    } } ></input>
                  {listaBusca.map(result => (
                    <div className='ResBusca'>
                      <img className='imgBusca' src={result.src}></img>
                      <p>{result.nome}</p>
                    </div>
                  ))}
                </section>
                } />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
