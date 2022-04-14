import IConta from "../interfaces/conta";

export function getHistorico(): IConta[] {
    let historicoContasObj: IConta[];
    const historicoContas = localStorage.getItem("historicoContas");
    if (historicoContas) {
      historicoContasObj = [...JSON.parse(historicoContas)];
    } else {
        historicoContasObj = []
    }
    return historicoContasObj;
}

export function excluirConta(id: string | undefined): string {
    let historicoContasObj: IConta[];
    const historicoContas = localStorage.getItem("historicoContas");
    if (historicoContas) {
      historicoContasObj = [...JSON.parse(historicoContas)];
    } else {
        historicoContasObj = []
    }
    const novoHistorico = historicoContasObj.filter((conta) => conta.id !== id);
    return JSON.stringify(novoHistorico)
}

export function adicionarConta(conta: IConta): string {
    if (!localStorage.getItem("historicoContas")) {
        const arrObjetoConta = [conta];
        return JSON.stringify(arrObjetoConta)
      } else {
        const historicoContas = localStorage.getItem("historicoContas");
        const historicoContasObj = JSON.parse(historicoContas as string);
        historicoContasObj.push(conta);
        return JSON.stringify(historicoContasObj)
      }
}