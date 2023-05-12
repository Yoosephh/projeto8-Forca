import React from "react"
import "./css/reset.css"
import "./css/index.css"


export default function Letras({letrasEscolhidas, setEscolhidas, maskWord, setMaskWord, palavraEscolhida, posicoes}){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    function verificaLetra(i, letter){
        
        alfabeto[i] === letter ? revelaLetra(letter, i) : errouLetra()

        function revelaLetra(letter, i){
            for(let j = 0; j < palavraEscolhida.length; j++){
                if(palavraEscolhida[j] === letter){
                    posicoes.push(j)
                    let newMaskWord = maskWord.substring(0, j * 2) + letter + maskWord.substring(j * 2 + 1);
                    setMaskWord(newMaskWord)
                }
            }  
        }

        function errouLetra(){
            if(!letrasEscolhidas.includes(i) && letrasEscolhidas.length < 6){
                let escolhidas = [...letrasEscolhidas]
                escolhidas.push(i)
                setEscolhidas(escolhidas)
            }
        }
    }

    let btnLetra = alfabeto.map((letter, index) => {
        return(
                <button key={index} onClick={()=> verificaLetra(index, letter)} className={letrasEscolhidas.includes(index) ? "btn selecionado" : "btn"}>{letter.toUpperCase()}</button>
        )
    })

    return <div className="divBtn">{btnLetra}</div>
}