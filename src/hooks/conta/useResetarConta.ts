/* IMPORTS */
import { useSetRecoilState } from "recoil"
import { compras, consumidores, contaAtual } from "../../states/atom"

/************************
O hook apaga todos os estados globais de conta, lista de consumidres e lista de compras
************************/
const useResetarConta = (): () => void => {
    const setConta = useSetRecoilState(contaAtual)
    const setListaConsumidores = useSetRecoilState(consumidores)
    const setListaCompras = useSetRecoilState(compras)
    return () => {
        setConta({ nome: "", consumidores: [], compras: [], id: "" });
        setListaConsumidores([]);
        setListaCompras([]);
    }
}

export default useResetarConta;