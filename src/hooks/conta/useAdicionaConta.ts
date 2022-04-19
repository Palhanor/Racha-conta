import IConta from "../../interfaces/conta";

function useAdicionaConta() {
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
