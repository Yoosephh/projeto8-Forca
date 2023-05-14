import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";

export default function App() {
  const [gameState, setGameState] = React.useState("maskWord")
  const [palavraEscolhida, setPalavra] = React.useState("")
  const [maskWord, setMaskWord] = React.useState([])
  const [letrasEscolhidas, setEscolhidas] = React.useState(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])
  const [indexAtual, setIndexAtual] = React.useState(0)

  return(
  <div className="render">

    <Jogo palavraEscolhida={palavraEscolhida} setPalavra={setPalavra} maskWord={maskWord} setMaskWord={setMaskWord}  setEscolhidas={setEscolhidas} indexAtual={indexAtual} setIndexAtual={setIndexAtual} gameState={gameState} setGameState={setGameState}/>

    <Letras letrasEscolhidas={letrasEscolhidas} palavraEscolhida={palavraEscolhida} setEscolhidas={setEscolhidas} setMaskWord={setMaskWord} maskWord={maskWord}  indexAtual={indexAtual} setIndexAtual={setIndexAtual} gameState={gameState} setGameState={setGameState}/>

  </div>
)}
