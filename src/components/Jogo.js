import Botao from "./StartBtn";
import "./css/reset.css"
import "./css/index.css"


export default function Jogo({palavraEscolhida, setPalavra, maskWord, setMaskWord, posicoes}) {
  let imgs = {
    img1: "./assets/forca0.png",
    img2: "./assets/forca1.png",
    img3: "./assets/forca2.png",
    img4: "./assets/forca3.png",
    img5: "./assets/forca4.png",
    img6: "./assets/forca5.png",
    img7: "./assets/forca6.png",
  };
  let img = <img className="forca" src={imgs.img1} alt="img1"></img>;

  return (
    <div className="jogo"> 
      {img}
      <div className="containerBtn">
        <h1 className="maskWord">{maskWord}</h1>
        <Botao maskWord={maskWord} setMaskWord={setMaskWord} palavraEscolhida={palavraEscolhida} setPalavra={setPalavra} posicoes={posicoes}/>
      </div>
    </div>
  );
}
