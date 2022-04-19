import IConta from "../interfaces/conta";

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