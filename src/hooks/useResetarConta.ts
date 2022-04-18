import { useSetRecoilState } from "recoil"
import { compras, consumidores, nomeConta } from "../states/atom"

const useResetarConta = () => {
    const setConta = useSetRecoilState(nomeConta)
    const setListaConsumidores = useSetRecoilState(consumidores)
    const setListaCompras = useSetRecoilState(compras)
    return () => {
        setConta("");
        setListaConsumidores([]);
        setListaCompras([]);
    }
}

export default useResetarConta;