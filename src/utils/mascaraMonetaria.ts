
function adicionaMascaraMonetaria(valor: number | null) {
  if (!valor) valor = 0;
  const valorStr = valor.toString().padStart(3, "0");
  const valorArr = valorStr.split("");
  const novoNumInt = valorArr.slice(0, valorArr.length - 2).join("");
  const novoNumFloat = valorArr.slice(valorArr.length - 2, valorArr.length).join("");
  return `R$ ${adicionaPonto(novoNumInt)},${novoNumFloat}`;
}

function removeMascaraMonetaria(valor: string) {
  const valorLimitado = limitadorTamanho(valor)
  const removeMascaraMonetaria = valorLimitado.replace("R$ ", "").replace(",", "").replace(/\./g, "");
  const valorDoInputStr = parseInt(removeMascaraMonetaria);
  return valorDoInputStr;
}

const mascaraMonetaria = {
  adicionaMascaraMonetaria,
  removeMascaraMonetaria
}

export default mascaraMonetaria;

function adicionaPonto(valorInteiro: string) {
  const arrReverse = valorInteiro.split("").reverse()
  const novoArrReverse = []
  let contador = 0
  for (let i = 0; i < arrReverse.length; i++) {
    if (contador === 3) {
      novoArrReverse.push(".")
      contador = 0
    }
    novoArrReverse.push(arrReverse[i])
    contador++
  }
  const novoVal = novoArrReverse.reverse().join("")
  return novoVal
}

function limitadorTamanho(valor: string) {
  if (valor.length > 17) {
    const quebraValor = String(valor).split("")
    quebraValor.pop()
    const valorSemUmDigito = quebraValor.join("")
    return valorSemUmDigito;
  }
  return valor
}