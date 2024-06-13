import { pesquisa } from '../body/pesquisa';
import { useState } from 'react';

function Serviços() {

  const [ listaBusca, setListaBusca] = useState([])
  
  return (

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
               
  );
}

export default Serviços;
