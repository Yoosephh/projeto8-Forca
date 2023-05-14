import palavras from "../palavras";
import "./css/reset.css"
import "./css/index.css"


export default function Botao({ setPalavra, setMaskWord, setEscolhidas, setIndexAtual, setGameState}){

    function StartGame(){

        setGameState("maskWord")
        setEscolhidas([])
        setIndexAtual(0)
        const iWord = Math.floor(Math.random() * palavras.length);
        const palavra = palavras[iWord];
        setPalavra(palavra);
        setMaskWord(palavra.replace(/[a-zA-Z]/g, "_ "));
    }
    
    return(
        <button onClick={() => StartGame()} className="btnStart">Escolher palavra</button> 
    )
}