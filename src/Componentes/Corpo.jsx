import React from 'react'
import Cabecario from './cabecario.jsx'
import './Corpo.css'
function Corpo() {
  return ( 
    <>
  <Cabecario/>
    <div className='corpo-container'>
    <button onClick={() => alert("Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA.")}>Aviso!!!!!!</button>
    </div>
    </>
  )
}

export default Corpo