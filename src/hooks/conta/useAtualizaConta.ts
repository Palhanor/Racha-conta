/* IMPORTS */
import { useRecoilState, useRecoilValue } from "recoil"
import IConta from "../../interfaces/conta"
import { compras, consumidores, contaAtual } from "../../states/atom"

/************************
O hook atualiza o estado global contaAtual configurado no Recoil
Para isso ele passa as lista de consumidores e lista de compras
************************/
function useAtualizarConta(): (() => void) {
    const [conta, setConta] = useRecoilState(contaAtual)
    const listaConsumidores = useRecoilValue(consumidores)
    const listaCompras = useRecoilValue(compras)
    return () => {
        const novaConta: IConta = {
            nome: conta.nome, 
            consumidores: [...listaConsumidores], 
            compras: [...listaCompras], 
            id: conta.id
        }
        setConta(novaConta)
    }
}

export default useAtualizarConta;