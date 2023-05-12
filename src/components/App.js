import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {
  const [palavraEscolhida, setPalavra] = React.useState("")
  const [maskWord, setMaskWord] = React.useState([])
  const [letrasEscolhidas, setEscolhidas] = React.useState("")
  let posicoes = [];


  return(
  <div className="render">

    <Jogo palavraEscolhida={palavraEscolhida} setPalavra={setPalavra} maskWord={maskWord} setMaskWord={setMaskWord} posicoes={posicoes}/>

    <Letras letrasEscolhidas={letrasEscolhidas} palavraEscolhida={palavraEscolhida} setEscolhidas={setEscolhidas} setMaskWord={setMaskWord} maskWord={maskWord} posicoes={posicoes}/>

  </div>
)}
