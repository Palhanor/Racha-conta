/************************
A função recebe o valor (number ou null) do estado precoCompra
Então o valor é convertido em uma string e são adicionados novos zeros (caso o length seja menor que 3)
Por fim, a string é quebrada em duas novas strings, uma de antes da vírgula e a outra de depois da vírgula
Então é retornado o valor concatenado com a vírgula, e os valores de depois da vírgula passa em uma função auxiliar que adiciona os pontos
************************/
function adicionaMascaraMonetaria(valor: number | null): string {
  if (!valor) valor = 0;
  const valorStr = valor.toString().padStart(3, "0");
  const valorArr = valorStr.split("");
  const novoNumInt = valorArr.slice(0, valorArr.length - 2).join("");
  const novoNumFloat = valorArr.slice(valorArr.length - 2, valorArr.length).join("");
  return `R$ ${adicionaPonto(novoNumInt)},${novoNumFloat}`;
}

/************************
O valor (string) presente no input é passado
Então ele passa por uma função auxiliar que limita seu tamanho para um número máximo de caracteres
Por fim, são removidos todos os valores não numéricos, e o valor é transformado em um número que é retornado no final
************************/
function removeMascaraMonetaria(valor: string): number {
  const valorLimitado = limitadorTamanho(valor)
  const removeMascaraMonetaria = valorLimitado.replace("R$ ", "").replace(",", "").replace(/\./g, "");
  const valorDoInputStr = parseInt(removeMascaraMonetaria);
  return valorDoInputStr;
}

/************************
A função auxliar recebe o valor (string) e transforma em um array ao contrário
Após isso é feita uma iteração que adiciona um ponto no array a cada 3 loops
Por fim o valor é revertido novamente e unificado, criando um número com um . a cada intervalo de 3 dígitos
************************/
function adicionaPonto(valorInteiro: string): string {
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

/************************
A função auxiliar recebe um valor (string)
Caso o valor seja maior de um numero específicos de caracteres, o último caractere é removido
No final, o valor é retornado
************************/
function limitadorTamanho(valor: string): string {
  if (valor.length > 17) {
    const quebraValor = String(valor).split("")
    quebraValor.pop()
    const valorSemUmDigito = quebraValor.join("")
    return valorSemUmDigito;
  }
  return valor
}

/* OBJETO CONTENDO FUNÇÕES DA MÁSCARA */
const mascaraMonetaria = {
  adicionaMascaraMonetaria,
  removeMascaraMonetaria
}
export default mascaraMonetaria;