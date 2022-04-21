/* IMPORT */
import { useSetRecoilState } from "recoil";
import { consumidores } from "../../states/atom";

/************************
O hook recebeo id (string) de um pedido
Então pega a lista de consumidores e filtra os pedidos destes considerando o id passado
Por fim configura a nova lista como oficial
************************/
const useRemovePedidoConsumidor = (): (pedidoID: string | undefined) => void => {
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
