import { useSetRecoilState } from "recoil"
import { contaAtual } from "../../states/atom"
import { v4 as uuidv4 } from "uuid";

function useCriaConta() {
    const setConta = useSetRecoilState(contaAtual)
    return (nome: string) => {
        const novaConta = { nome: nome, consumidores: [], compras: [], id: uuidv4() }
        setConta(novaConta)
    }
}

export default useCriaConta;