/* IMPORTS */
import IConta from "../../interfaces/conta";

/************************
O hook recebe uma conta (IConta)
Então caso o localStorage historicoConta não esteja configurado, ele o cria e passa a conta
Caso já exista então ele pega os dados, joga a conta dentro,e então passa o novo valor
************************/
function useAdicionaConta(): ((conta: IConta) => void) {
  return (conta: IConta) => {
    if (!localStorage.getItem("historicoContas")) {
      const listaConta: IConta[] = [conta];
      localStorage.setItem("historicoContas", JSON.stringify(listaConta))
    } else {
      const historico: (string | null) = localStorage.getItem("historicoContas");
      const historicoFormatado: IConta[] = JSON.parse(historico as string);
      historicoFormatado.push(conta);
      localStorage.setItem("historicoContas", JSON.stringify(historicoFormatado));
    }
  };
}

export default useAdicionaConta;
