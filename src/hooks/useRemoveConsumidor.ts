import { useSetRecoilState } from "recoil"
import { consumidores } from "../states/atom"

const useRemoveConsumidor = (): (id: string | undefined) => void => {
    const setListaConsumidores = useSetRecoilState(consumidores)
    return (id: string | undefined) => {
        setListaConsumidores((listaAnterior) => listaAnterior.filter(
            (cliente) =>
            cliente.id !== id || cliente.pedidos.length > 0
          ))
    }
}

export default useRemoveConsumidor;