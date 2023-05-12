import palavras from "../palavras";
import "./css/reset.css"
import "./css/index.css"


export default function Botao({palavraEscolhida, setPalavra, maskWord, setMaskWord, posicoes}){

    function StartGame(){
        posicoes = []
        const iWord = Math.floor(Math.random() * palavras.length);
        const palavra = palavras[iWord];

        setPalavra(palavra);
        setMaskWord(palavra.replace(/[a-zA-Z]/g, "_ "));
        return (palavraEscolhida, maskWord, console.log(palavra))
    }

    return(
        <button onClick={() => StartGame()} className="btnStart">Escolher palavra</button> 
    )
}