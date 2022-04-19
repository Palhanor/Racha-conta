import { useSetRecoilState } from "recoil"
import { compras, consumidores, contaAtual } from "../states/atom"

const useResetarConta = () => {
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