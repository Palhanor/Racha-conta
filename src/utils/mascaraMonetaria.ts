/************************
A função recebe o valor (number ou null) do estado precoCompra
Então o valor é convertido em uma string e são adicionados novos zeros (caso o length seja menor que 3)
Por fim, a string é quebrada em duas novas strings, uma de antes da vírgula e a outra de depois da vírgula
Então é retornado o valor concatenado com a vírgula, e os valores de depois da vírgula passa em uma função auxiliar que adiciona os pontos
************************/
function adicionaMascaraMonetaria(valor: (number | null)): string {
  if (!valor) valor = 0;
  const valorString: string = valor.toString().padStart(3, "0");
  const valorQuebrado: string[] = valorString.split("");
  const parteInteira: string = valorQuebrado.slice(0, valorQuebrado.length - 2).join("");
  const parteFracionaria: string = valorQuebrado.slice(valorQuebrado.length - 2, valorQuebrado.length).join("");
  return `R$ ${adicionaPontos(parteInteira)},${parteFracionaria}`;
}

/************************
O valor (string) presente no input é passado
Então ele passa por uma função auxiliar que limita seu tamanho para um número máximo de caracteres
Por fim, são removidos todos os valores não numéricos, e o valor é transformado em um número que é retornado no final
************************/
function removeMascaraMonetaria(valor: string): number {
  const valorLimitado: string = limitaTamanho(valor)
  const removeMascara: string = valorLimitado.replace("R$ ", "").replace(",", "").replace(/\./g, "");
  const valorNumerico: number = parseInt(removeMascara);
  return valorNumerico;
}

/************************
A função auxliar recebe o valor (string) e transforma em um array ao contrário
Após isso é feita uma iteração que adiciona um ponto no array a cada 3 loops
Por fim o valor é revertido novamente e unificado, criando um número com um . a cada intervalo de 3 dígitos
************************/
function adicionaPontos(valorInteiro: string): string {
  const valorArrayRevertido: string[] = valorInteiro.split("").reverse();
  const novoArrayReverso: string[] = [];
  let contador: number = 0;
  for (let i = 0; i < valorArrayRevertido.length; i++) {
    if (contador === 3) {
      novoArrayReverso.push(".");
      contador = 0;
    }
    novoArrayReverso.push(valorArrayRevertido[i]);
    contador++;
  }
  const valorFinal: string = novoArrayReverso.reverse().join("");
  return valorFinal;
}

/************************
A função auxiliar recebe um valor (string)
Caso o valor seja maior de um numero específicos de caracteres, o último caractere é removido
No final, o valor é retornado
************************/
function limitaTamanho(valor: string): string {
  const tamanhoMaximo: number = 17;
  if (valor.length > tamanhoMaximo) {
    const valorQuebrado: string[] = String(valor).split("")
    valorQuebrado.pop()
    const valorLimitado: string = valorQuebrado.join("")
    return valorLimitado;
  }
  return valor
}

/* OBJETO CONTENDO FUNÇÕES DA MÁSCARA */
const mascaraMonetaria = {
  adicionaMascaraMonetaria,
  removeMascaraMonetaria
}
export default mascaraMonetaria;