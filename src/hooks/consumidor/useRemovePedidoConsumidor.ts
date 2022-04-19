import { useSetRecoilState } from "recoil";
import { consumidores } from "../../states/atom";

const useRemovePedidoConsumidor = () => {
  const setListaConsumidores = useSetRecoilState(consumidores);
  return (pedidoID: string | undefined) => {
    setListaConsumidores((velhaListaConsumidores) =>
      velhaListaConsumidores.map((dadosConsumidor) => {
        const novosPedidos = dadosConsumidor.pedidos.filter(
          (pedido) => pedido.id !== pedidoID
        );
        return {
          nome: dadosConsumidor.nome,
          pedidos: novosPedidos,
          id: dadosConsumidor.id,
        };
      })
    );
  };
};

export default useRemovePedidoConsumidor;
