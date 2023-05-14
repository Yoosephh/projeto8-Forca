import React from "react";
import "./css/reset.css";
import "./css/index.css";

export default function Letras({
  letrasEscolhidas,
  setEscolhidas,
  maskWord,
  setMaskWord,
  palavraEscolhida,
  indexAtual,
  setIndexAtual,
  setGameState,
}) {
  const alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function verificaLetra(letter) {
    let escolhidas = [...letrasEscolhidas];
    escolhidas.push(letter);
    setEscolhidas(escolhidas);
    palavraEscolhida.includes(letter) ? revelaLetra(letter) : errouLetra();

    function revelaLetra(letter) {
      let newMaskWord = maskWord;
      let changed = false;
      for (let j = 0; j < palavraEscolhida.length; j++) {
        if (palavraEscolhida[j] === letter) {
          newMaskWord =
            newMaskWord.substring(0, j * 2) +
            letter +
            newMaskWord.substring(j * 2 + 1);
          changed = true;
        }
      }
      if (changed) {
        setMaskWord(newMaskWord);
        let teste = newMaskWord.replace(/\s/g, "");
        if (teste === palavraEscolhida) {
            
          setGameState("ganhou");
          setEscolhidas([
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ]);
          alert('Parabens Thalia amorzinho da minha vida vc ganhou <3')
        }
      }
    }

    function errouLetra() {
      const incremento = indexAtual + 1;
      setIndexAtual(incremento);
      if (indexAtual === 5) {
        setGameState("perdeu");
        setEscolhidas([
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ]);
        setMaskWord(palavraEscolhida);
      }
    }
  }

  let btnLetra = alfabeto.map((letter, index) => {
    return (
      <button
        key={index}
        onClick={() => verificaLetra(letter, index)}
        className={letrasEscolhidas.includes(letter) ? "selecionado" : "btn"}
        disabled={letrasEscolhidas.includes(letter) ? true : false}
        data-test="letter"
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <div className="divBtn">{btnLetra}</div>;
}
