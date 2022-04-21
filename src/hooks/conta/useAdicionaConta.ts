/* IMPORTS */
import IConta from "../../interfaces/conta";

/************************
O hook recebe uma conta (IConta)
Então caso o localStorage historicoConta não esteja configurado, ele o cria e passa a conta
Caso já exista então ele pega os dados, joga a conta dentro,e então passa o novo valor
************************/
function useAdicionaConta(): (conta: IConta) => void {
  return (conta: IConta) => {
    if (!localStorage.getItem("historicoContas")) {
      const arrObjetoConta = [conta];
      localStorage.setItem("historicoContas", JSON.stringify(arrObjetoConta))
    } else {
      const historicoContas = localStorage.getItem("historicoContas");
      const historicoContasObj = JSON.parse(historicoContas as string);
      historicoContasObj.push(conta);
      localStorage.setItem("historicoContas", JSON.stringify(historicoContasObj));
    }
  };
}

export default useAdicionaConta;
