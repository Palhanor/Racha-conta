/* IMPORTS */
import IConta from "../../interfaces/conta";

/************************
O hook acessa o localStorage historicoConta
Então transforma em um array de contas (IConta[]), retornando este array
Para ser chamado é necessário passar um const historico = useHistorico()()
************************/
function useHistorico(): (() => IConta[]) {
    return (): IConta[] => {
        const dadosArmazenados: (string | null) = localStorage.getItem("historicoContas");
        if (!dadosArmazenados) {
            return []
        }
        return [...JSON.parse(dadosArmazenados)];
    }
}

export default useHistorico;