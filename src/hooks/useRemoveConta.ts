import useHistorico from "./useHistorico";

function useRemoveConta() {
    const historico = useHistorico()();
    return (contaID: string | undefined) => {
        const novoHistorico = historico.filter((conta) => conta.id !== contaID);
        localStorage.setItem("historicoContas", JSON.stringify(novoHistorico));
    }
}

export default useRemoveConta;