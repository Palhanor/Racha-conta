/* IMPORTS */
import IConta from "../../interfaces/conta";

/************************
O hook acessa o localStorage historicoConta
Então transforma em um array de contas (IConta[]), retornando este array
Para ser chamado é necessário passar um const historico = useHistorico()()
************************/
function useHistorico(): () => IConta[] {
    return (): IConta[] => {
        let historicoContasObj: IConta[];
        const historicoContas = localStorage.getItem("historicoContas");
        if (historicoContas) {
          historicoContasObj = [...JSON.parse(historicoContas)];
        } else {
            historicoContasObj = []
        }
        return historicoContasObj;
    }
}

export default useHistorico;