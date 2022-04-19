import { useRecoilState, useRecoilValue } from "recoil"
import { compras, consumidores, contaAtual } from "../../states/atom"

function useAtualizarConta() {
    const [conta, setConta] = useRecoilState(contaAtual)
    const listaConsumidores = useRecoilValue(consumidores)
    const listaCompras = useRecoilValue(compras)
    return () => {
        const novaConta = {
            nome: conta.nome, 
            consumidores: [...listaConsumidores], 
            compras: [...listaCompras], 
            id: conta.id
        }
        setConta(novaConta)
    }
}

export default useAtualizarConta;