function adicionaMascaraMonetaria(valor: number | null) {
    if (!valor) valor = 0;
    const valorStr = valor.toString().padStart(3, "0");
    const valorArr = valorStr.split("");
    const novoNumInt = valorArr.slice(0, valorArr.length - 2);
    const novoNumFloat = valorArr.slice(valorArr.length - 2, valorArr.length);
    return `R$ ${novoNumInt.join("")},${novoNumFloat.join("")}`;
  }

  function removeMascaraMonetaria(valor: string) {
    const removeMascaraMonetaria = valor.replace("R$ ", "").replace(",", "");
    const valorDoInputStr = parseInt(removeMascaraMonetaria);
    return valorDoInputStr;
  }

const mascaraMonetaria = {
  adicionaMascaraMonetaria,
  removeMascaraMonetaria
}

export default mascaraMonetaria;