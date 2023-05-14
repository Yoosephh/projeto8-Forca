import Botao from "./StartBtn";
import "./css/reset.css"
import "./css/index.css"



export default function Jogo({palavraEscolhida, setPalavra, maskWord, setMaskWord,  setEscolhidas, indexAtual, setIndexAtual, gameState, setGameState}) {
  let imgs = [
  "./assets/forca0.png",
  "./assets/forca1.png",
  "./assets/forca2.png",
  "./assets/forca3.png",
  "./assets/forca4.png",
  "./assets/forca5.png",
  "./assets/forca6.png",
];
  
  let img = <img data-test="game-image" className="forca" src={imgs[indexAtual]} alt={indexAtual}></img>;

  return (
    <div className="jogo"> 
      {img}
      <div className="containerBtn">
        <Botao maskWord={maskWord} setMaskWord={setMaskWord} palavraEscolhida={palavraEscolhida} setPalavra={setPalavra} setEscolhidas={setEscolhidas}  setIndexAtual={setIndexAtual} setGameState={setGameState}/>
        <h1 data-test="word" className={gameState}>{maskWord}</h1>
      </div>
    </div>
  );
}
